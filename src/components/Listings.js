import React, { Fragment } from 'react'
import { Card, CardContent, CardActions, Divider } from '@material-ui/core'
import { Link } from 'react-router-dom'

const businessListings = (props) => {
console.log(props.listings)
const listings = props.listings.map((listing, id) =>{
    return(
        <div className="card-container">
                 <Card key={id} className="card">
                    <CardContent className="text-gray">
                        <span>{listing.name.toUpperCase()}</span>
                         <ul>
                         <li>name: {listing["name"]}</li>
                        <li> address: {listing["address"]}</li>
                        <li>description: {listing["description"]}</li>
                         <li>hours: {listing["hours"]}</li>
                         </ul>
                    </CardContent>
                     <Divider />
                     <CardActions style={{ color: 'mediumblue' }}>
                         <Link to={`/listing/${listing.id}`}>See More Details</Link>
                     </CardActions>
                </Card>
    })}
        </div>

)
}
}

export default businessListings