// @flow

import type { EdgeCurrencyWallet } from 'edge-core-js'
import { connect } from 'react-redux'

import type { DispatchProps, StateProps } from '../../components/scenes/FioRenewAddressScene'
import { FioRenewAddressScene } from '../../components/scenes/FioRenewAddressScene'
import { FIO_STR } from '../../constants/WalletAndCurrencyConstants'
import { isConnectedState } from '../../modules/Core/selectors'
import { refreshAllFioAddresses } from '../../modules/FioAddress/action'
import { getDisplayDenomination } from '../../modules/Settings/selectors'
import { getFioWalletByAddress } from '../../modules/UI/selectors'
import type { Dispatch, State } from '../../types/reduxTypes'

const mapStateToProps = (state: State) => {
  const fioWallet: EdgeCurrencyWallet | null = getFioWalletByAddress(state)
  const displayDenomination = getDisplayDenomination(state, FIO_STR)

  const out: StateProps = {
    fioWallet,
    fee: state.ui.scenes.fioAddress.renewalFee,
    denominationMultiplier: displayDenomination.multiplier,
    isConnected: isConnectedState(state)
  }
  return out
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  setFioAddress: (fioAddressName: string, expiration: string) =>
    dispatch({
      type: 'FIO/FIO_ADDRESS_SET_FIO_ADDRESS',
      data: { fioAddressName, expiration }
    }),
  refreshAllFioAddresses: () => dispatch(refreshAllFioAddresses())
})

export const FioRenewAddressConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(FioRenewAddressScene)
