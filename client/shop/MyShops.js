import React from 'react'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import {Redirect, Link} from 'react-router-dom'

const MyShops =() =>
{
	return(<div>
		     <Link to="/seller/shop/new">
	               <Button color="primary" variant="contained">
	                <Icon>add_box</Icon>  New Shop
	              </Button>
	          </Link>
		    </div>)
}
export default MyShops