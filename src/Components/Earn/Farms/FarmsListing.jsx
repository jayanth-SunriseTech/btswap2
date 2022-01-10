import React from 'react'
import EarnButton from '../EarnButtonGroup/EarnButton'
import EarnPageHeader from '../HeaderTab/EarnPageHeader'
import FarmsCard from './FarmsCard'
import './FarmsListing.css'

function FarmsListing() {
    return (
        <div className='farms__page'>
            <EarnButton/>
            <EarnPageHeader/>
            <div className="farms-card-list">
            <FarmsCard/>
            <FarmsCard/>
            <FarmsCard/>
            </div>
            
        </div>
    )
}

export default FarmsListing
