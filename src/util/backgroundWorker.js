// @flow

import { fetchLoginMessages } from 'edge-core-js'
import { AsyncStorage, Platform } from 'react-native'
import BackgroundFetch from 'react-native-background-fetch'
import PushNotification from 'react-native-push-notification'
import { sprintf } from 'sprintf-js'

import ENV from '../../env.json'
import * as Constants from '../constants/indexConstants.js'
import s from '../locales/strings.js'

export async function backgroundWorker () {
  console.log('appStateLog: running background task')

  // Only run once per day:
  const last24HourNotif = await AsyncStorage.getItem(Constants.LOCAL_STORAGE_BACKGROUND_PUSH_KEY)
  const now = new Date()
  if (last24HourNotif) {
    const lastNotifDate = new Date(last24HourNotif).getTime() / 1000
    const delta = now.getTime() / 1000 - lastNotifDate
    if (delta < Constants.PUSH_DELAY_SECONDS) {
      BackgroundFetch.finish()
      return
    }
  }
  await AsyncStorage.setItem(Constants.LOCAL_STORAGE_BACKGROUND_PUSH_KEY, now.toString())

  // Perform tasks:
  return showLoginMessages().then(
    () => {
      // Required: Signal completion of your task to native code
      // If you fail to do this, the OS can terminate your app
      // or assign battery-blame for consuming too much background-time
      BackgroundFetch.finish(BackgroundFetch.FETCH_RESULT_NEW_DATA)
    },
    error => {
      console.error(error)
      global.bugsnag.notify(error)
      BackgroundFetch.finish(BackgroundFetch.FETCH_RESULT_FAILED)
    }
  )
}

/**
 * Shows OTP and other messages for users on this device.
 */
async function showLoginMessages () {
  const loginMessages = await fetchLoginMessages(ENV.AIRBITZ_API_KEY)

  for (const username of Object.keys(loginMessages)) {
    const messages = loginMessages[username]
    if (messages.otpResetPending) {
      showSystemNotification(s.strings.otp_notif_title, sprintf(s.strings.otp_notif_body, username))
    }
  }
}

/**
 * Helper function to a show system-level notifications.
 */
function showSystemNotification (title: string, message: string) {
  const date = new Date(Date.now() + 1000)
  if (Platform.OS === 'android') {
    PushNotification.localNotificationSchedule({
      message: title,
      subText: message,
      date
    })
  } else {
    PushNotification.localNotificationSchedule({
      title,
      message,
      date
    })
  }
}
