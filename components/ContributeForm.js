import React, { useState } from 'react'
import { Form, Input, Button, Message } from 'semantic-ui-react'
import Campaign from '../ethereum/campaign'
import web3 from '../ethereum/web3'
import { useRouter } from 'next/router'

const ContributeForm = (props) => {
  const [contributeValue, setContributeValue] = useState()
  const [loadingTransaction, setLoadingTransaction] = useState(false)
  const [successTransaction, setSuccessTransaction] = useState(false)
  const [errorTransaction, setErrorTransaction] = useState(false)
  const [message, setMessage] = useState('')

  const router = useRouter()

  const onChangeHandler = (event) => {
    setContributeValue(event.target.value)
  }

  const onContribute = async () => {
    try {
      setSuccessTransaction(false)
      setErrorTransaction(false)
      setLoadingTransaction(true)
      setMessage('Loading...')
      const campaign = Campaign(props.address)
      const accounts = await web3.eth.getAccounts()

      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(contributeValue, 'ether'),
      })
      setMessage('Successfully Transaction!!!')
      setLoadingTransaction(false)
      setSuccessTransaction(true)
      router.push(`/campaigns/${props.address}`)
    } catch (error) {
        setErrorTransaction(true)
        setLoadingTransaction(false)
        setMessage('Error to complete the transaction')
    }
  }

  return (
    <Form style={{ marginTop: '10px' }}>
      <Form.Field>
        <label>Contribute to this Campaign!!!</label>
        <Input
          label="ether"
          labelPosition="right"
          placeholder="1"
          onChange={onChangeHandler}
        />
      </Form.Field>
      <Button
        primary
        loading={loadingTransaction}
        onClick={() => onContribute()}
      >
        Contribute
      </Button>
      {errorTransaction ? (
          <Message negative header="ERROR" content={message} />
        ) : loadingTransaction ? (
          <Message info header="Transaction" content={message} />
        ) : successTransaction ? (
          <Message positive header="Success Transaction" content={message} />
        ) : null}
    </Form>
  )
}

export default ContributeForm
