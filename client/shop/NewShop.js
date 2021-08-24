import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import FileUpload from '@material-ui/icons/AddPhotoAlternate'
import TextField from '@material-ui/core/TextField'
const NewShop = () =>
{ const [values, setValues] = useState({
		      name: '',
		      description: '',
		      image: '',
		      redirect: false,
		      error: ''
		  })
			const handleChange = name => event => {
		 const value = name === 'image'
		 ? event.target.files[0]
		 : event.target.value
		 setValues({ ...values, [name]: value })
		}
	return(<div>
               <input accept="image/*" onChange={handleChange('image')} id="icon-button-file"  type="file" />
				<label htmlFor="icon-button-file">
				 <Button variant="contained" color="secondary" component="span">
				 Upload Logo <FileUpload/>
				 </Button>
				</label> 
				<span>{values.image ? values.image.name : ''}</span>
				<TextField id="name" label="Name"  value={values.name} onChange={handleChange('name')} margin="normal"/><br/>
	          <TextField
	            id="multiline-flexible"
	            label="Description"
	            multiline
	            rows="2"
	            value={values.description}
	            onChange={handleChange('description')}
	            
	            margin="normal"
	          /><br/>

		</div>)
}

export default NewShop