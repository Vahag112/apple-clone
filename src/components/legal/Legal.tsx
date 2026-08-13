import { Link } from 'react-router-dom'
import './Legal.scss'

export default function Legal() {
  return (
    <div className='legal'>
      <div className="container">
        <div className="content">
            <p>* Available for Qualified Purchasers only. Qualified Purchasers receive an Apple Gift Card when they purchase an eligible Mac or iPad (“Eligible Product”) at a Qualifying Location through August 27, 2026. Gift card values may vary by Eligible Product. Customers will receive a discount equal to the value of the Apple Gift Card off the price of the Eligible Product, but will be charged for all items in their cart, including the Apple Gift Card. Only one Apple Gift Card per Eligible Product per Qualified Purchaser. Offer subject to availability. While supplies last. Additional restrictions apply. View full offer terms <Link to='/'>here</Link>.</p>
            <p>1. Based on internal Apple data and LinkedIn Top Companies 2026: The 50 best large employers to grow your career in the U.S.</p>
            <p>2. Trade‑in values will vary based on the condition, year, and configuration of your eligible trade‑in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit or for an Apple Gift Card. Trade‑in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In‑store trade‑in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores and may vary between in‑store and online trade‑in. Some stores may have additional requirements. Apple or its trade‑in partners reserve the right to refuse, cancel, or limit quantity of any trade‑in transaction for any reason. More details are available from Apple’s trade-in partner for trade‑in and recycling of eligible devices. Restrictions and limitations may apply.</p>
            <p>© QGIS.org. QGIS project and custom data by Oslandia.com. Map data from OpenStreetMap. Statistics data from Statistics Norway.</p>
            <p>
                To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.
            </p>
            <p>
                Apple Payments Services LLC, a subsidiary of Apple Inc., is a service provider of Goldman Sachs Bank USA for Apple Card and Savings accounts. Neither Apple Inc. nor Apple Payments Services LLC is a bank.
            </p>
            <p>
                All communications from Apple and Goldman Sachs Bank USA about Apple Card (including transactional and marketing communications) and customer service support are available in English. Certain communications about Apple Card can be viewed in another language depending on your device language settings. If you reside in the U.S. Virgin Islands, American Samoa, Guam, Northern Mariana Islands, or U.S. Minor Outlying Islands, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.
            </p>
            <p>
                Learn more about how Apple Card applications are evaluated at <Link to='/'>support.apple.com/kb/HT209218</Link>.
            </p>
            <p>A subscription is required for Apple Arcade, Apple Fitness+, Apple Music, and Apple TV.</p>
            <p>
                Features are subject to change. Some features, applications, and services may not be available in all regions or all languages.
            </p>

        </div>
      </div>
    </div>
  )
}
