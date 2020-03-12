// @flow

import { Dimensions, StyleSheet } from 'react-native'
import ExtraDimensions from 'react-native-extra-dimensions-android'

import THEME from '../../theme/variables/airbitz'
import { PLATFORM } from '../../theme/variables/platform.js'
import { scale } from '../../util/scaling.js'

const SOFT_MENU_BAR_HEIGHT = ExtraDimensions.get('SOFT_MENU_BAR_HEIGHT')

const titleColor = 'rgba(128,137,151,1.0)'
const bgColor = 'rgba(245,245,245,1.0)'

export const styles = {
  scene: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: bgColor
  },
  transactionsWrap: {
    flex: 1
  },
  androidTransactionsWrap: {
    flex: 1,
    height: PLATFORM.usableHeight - SOFT_MENU_BAR_HEIGHT + THEME.HEADER
  },
  scrollView: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  rowContainer: {
    backgroundColor: bgColor,
    height: scale(30),
    justifyContent: 'center',
    width: Dimensions.get('window').width
  },
  rowTitle: {
    color: titleColor,
    fontSize: scale(16),
    fontWeight: 'normal',
    paddingLeft: scale(15)
  },
  listContainer: {
    backgroundColor: bgColor,
    borderBottomColor: THEME.COLORS.GRAY_3,
    borderBottomWidth: scale(2),
    height: scale(50),
    justifyContent: 'center',
    paddingLeft: scale(15)
  },
  listTitle: {
    fontSize: scale(16),
    fontWeight: 'normal'
  },

  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: scale(75)
  },
  backRightBtnLeft: {
    backgroundColor: THEME.COLORS.ACCENT_BLUE,
    right: scale(75)
  },
  backRightBtnRight: {
    backgroundColor: THEME.COLORS.ACCENT_RED,
    right: 0
  },
  backTextWhite: {
    color: THEME.COLORS.WHITE
  },
  columnCurrency: {
    height: scale(75),
    width: '25%'
  },
  columnItem: {
    flexDirection: 'row',
    height: scale(75),
    justifyContent: 'flex-start',
    width: '75%'
  },
  controls: {
    alignItems: 'center',
    marginBottom: scale(30)
  },
  currency: {
    color: THEME.COLORS.ACCENT_RED,
    fontSize: scale(16),
    fontWeight: 'normal',
    textAlign: 'right'
  },
  fiat: {
    color: THEME.COLORS.ACCENT_RED,
    fontSize: scale(14),
    fontWeight: 'normal',
    textAlign: 'right'
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: THEME.COLORS.GRAY_3, // #DDD
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: scale(15)
  },
  rowFront: {
    backgroundColor: THEME.COLORS.WHITE,
    borderBottomColor: THEME.COLORS.GRAY_3,
    borderBottomWidth: scale(2),
    height: scale(75),
    justifyContent: 'flex-start'
  },
  rowFrontWithHeader: {
    backgroundColor: THEME.COLORS.WHITE,
    borderBottomColor: THEME.COLORS.GRAY_3,
    borderBottomWidth: scale(2),
    height: scale(105),
    justifyContent: 'flex-start'
  },
  rowHeaderOnly: {
    backgroundColor: THEME.COLORS.WHITE,
    borderBottomColor: THEME.COLORS.GRAY_3,
    borderBottomWidth: scale(2),
    height: scale(30),
    justifyContent: 'flex-start'
  },
  rowItem: {
    flexDirection: 'row',
    height: scale(75),
    justifyContent: 'space-between',
    paddingLeft: scale(10),
    paddingRight: scale(10),
    paddingTop: scale(15)
  },
  row: {
    height: '50%'
  },
  standalone: {
    marginBottom: scale(30),
    marginTop: scale(30)
  },
  standaloneRowBack: {
    alignItems: 'center',
    backgroundColor: THEME.COLORS.ACCENT_MINT,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: scale(15)
  },
  standaloneRowFront: {
    alignItems: 'center',
    backgroundColor: THEME.COLORS.GRAY_2, // or #ccc,
    height: scale(75),
    justifyContent: 'center'
  },
  switch: {
    alignItems: 'center',
    borderColor: THEME.COLORS.BLACK,
    borderWidth: scale(1),
    paddingVertical: scale(10),
    width: Dimensions.get('window').width / 4
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: scale(5)
  },
  text: {
    fontSize: scale(14),
    fontWeight: 'normal'
  },
  title: {
    fontSize: scale(16),
    fontWeight: 'normal'
  },
  trash: {
    height: scale(25),
    width: scale(25)
  }
}

export default StyleSheet.create(styles)
