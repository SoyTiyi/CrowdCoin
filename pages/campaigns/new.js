import React, { useRef, useState } from 'react'
import Layout from '../../components/Layout'
import { Form, Button, Input, Message } from 'semantic-ui-react'
import factory from '../../ethereum/factory'
import web3 from '../../ethereum/web3'

const newCampaign = () => {
  const [minimumWei, setMinimumWei] = useState()
  const [message, setMessage] = useState('')
  const [succ, setSucc] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [err, setErr] = useState(false)

  const onChangeHandler = (event) => {
    setMinimumWei(event.target.value)
    /* console.log(event.target.value) */
  }

  const onSubmit = async () => {
    try {
      setErr(false)
      setSucc(false)
      setProcessing(true)
      setMessage('Creating transaction...')
      const accounts = await web3.eth.getAccounts()
      await factory.methods.createCampaign(minimumWei).send({
        from: accounts[0],
      })
      setSucc(true)
      setProcessing(false)
      setMessage('Successfully Transaction!!!')
    } catch (error) {
      setProcessing(false)
      setErr(true)
      setMessage('Error to finishing the Campaign creation, try again')
    }
  }

  return (
    <Layout>
      <h3>Create a Campaign</h3>
      <Form>
        <Form.Field>
          <label>Minimum Contribution (wei)</label>
          <Input
            label="wei"
            labelPosition="right"
            placeholder="100"
            onChange={onChangeHandler}
          />
        </Form.Field>
        <Button loading={processing} primary onClick={() => onSubmit()}>
          Create Campaign
        </Button>
        {err ? (
          <Message negative header="ERROR" content={message} />
        ) : processing ? (
          <Message info header="Transaction" content={message} />
        ) : succ ? (
          <Message positive header="Success Transaction" content={message} />
        ) : null}
      </Form>
    </Layout>
  )
}

export default newCampaign
