import React, { useState } from 'react'
import Layout from '../../../../components/Layout'
import { Form, Input, Button, Message, Label, Grid } from 'semantic-ui-react'
import Campaign from '../../../../ethereum/campaign'
import web3 from '../../../../ethereum/web3'
import { useRouter } from 'next/router'

const newRequest = ({ address }) => {

    const router = useRouter()

  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState(0)
  const [recipient, setRecipient] = useState('')
  const [loading, setLoading] = useState(false)
  const [successfully, setSuccessfully] = useState(false)
  const [err, setErr] = useState(false)
  const [message, setMessage] = useState('')

  const onSummit = async () => {
    try {
        setErr(false)
        setSuccessfully(false)
        setLoading(true)
        setMessage('Creating the Request...')
        const campaign = Campaign(address)
        const accounts = await web3.eth.getAccounts()
        await campaign.methods.createRequest(
            description, 
            web3.utils.toWei(amount,'ether'), 
            recipient)
        .send({
            from: accounts[0]
        })
        setLoading(false)
        setMessage('Successfully request creation!!!')
        setSuccessfully(true)
        
    } catch (error) {
        console.log(error)
        setLoading(false)
        setSuccessfully(false)
        setMessage('Error to process the request creation!!!')
        setErr(true)
    }
  }

  const returnToCampaign = props => {
      router.push(`/campaigns/${address}/`)
  }

  const descriptionHandler = (event) => {
    setDescription(event.target.value)
  }

  const amountHandler = (event) => {
    setAmount(event.target.value)
  }

  const recipientHandler = (event) => {
    setRecipient(event.target.value)
  }

  return (
    <Layout>
      <h3>Create Request</h3>
      <Button primary floated="right" onClick={() => returnToCampaign()}>Back</Button>
      <Grid columns={1}>
        <Grid.Column width={5}>
          <Form style={{ marginTop: '10px' }}>
            <Form.Field>
              <label>Description</label>
              <Input onChange={descriptionHandler} />
            </Form.Field>
            <Form.Field>
              <label>Amount</label>
              <Input
                label="ether"
                labelPosition="right"
                placeholder="1"
                onChange={amountHandler}
              />
            </Form.Field>
            <Form.Field>
              <label>Recipient</label>
              <Input onChange={recipientHandler} />
            </Form.Field>
            <Button primary loading={loading} onClick={() => onSummit()}>Add Request</Button>
          </Form>
          {err ? (
          <Message negative header="ERROR" content={message} />
        ) : loading ? (
          <Message info header="Transaction" content={message} />
        ) : successfully ? (
          <Message positive header="Success Transaction" content={message} />
        ) : null}
        </Grid.Column>
      </Grid>
    </Layout>
  )
}

newRequest.getInitialProps = async (props) => {

  return {
    address: props.query.address
  }
}

export default newRequest
