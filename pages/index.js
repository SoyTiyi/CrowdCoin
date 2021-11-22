import React, { useEffect, useState } from 'react'
import factory from '../ethereum/factory'
import { Button, Card } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/Layout'
import Link from 'next/link'

const index = (props) => {
  const [campaigns, setCampaigns] = useState([])

  useEffect(() => {
    const getCampaigns = async () => {
      const listCampaigns = await factory.methods.getDeployedCampaigns().call()
      /* console.log(listCampaigns) */
      setCampaigns(listCampaigns)
    }

    getCampaigns()
  }, [])

  const renderCampaignAddresses = () => {
    const items = campaigns.map((address) => {
      return {
        header: address,
        description: <Link href={'/campaigns/' + address}>View Details</Link>,
        fluid: true,
      }
    })

    return <Card.Group items={items} />
  }

  return (
    <Layout>
      <h3>Open Campaigns</h3>
      <Button href={'/campaigns/new'} floated="right" primary content="Create Campaing" icon="add" />
      {renderCampaignAddresses()}
    </Layout>
  )
}

export default index
