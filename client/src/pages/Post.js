import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import AlertMessage from '../components/AlertMessage'
import { useAppContext } from '../context/appContext'

const Post = () => {
    const {
        postRecipe,
        showAlert,
        name,
        imageURL,
        tags,
        ingredients,
        instructions,
        handleInputChange,
        clearInputValues,
    } = useAppContext()

    const handleChange = (e) => {
        handleInputChange(e.target.name, e.target.value)
    }

    const handleClear = () => {
        clearInputValues()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        postRecipe()
    }

    return (
        <Box sx={{ height: '100vh' }}>
            <Grid container alignItems='center' justifyContent='center'>
                <Grid item sx={{ width: '100%' }}>
                    <Paper elevation={12} sx={{ padding: 5 }}>
                        <Typography variant='h3' paragraph>
                            Post a drink recipe
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            {showAlert && <AlertMessage />}
                            <TextField
                                required
                                margin='normal'
                                variant='standard'
                                id='name'
                                name='name'
                                label='Name'
                                value={name}
                                onChange={handleChange}
                                type='text'
                                sx={{
                                    width: 300,
                                    margin: '10px 30px 10px 0px',
                                }}
                            />
                            <TextField
                                required
                                margin='normal'
                                variant='standard'
                                id='url'
                                name='imageURL'
                                label='Image URL'
                                value={imageURL}
                                onChange={handleChange}
                                type='text'
                                sx={{
                                    width: 300,
                                    margin: '10px 30px 10px 0px',
                                }}
                            />

                            <TextField
                                required
                                margin='normal'
                                variant='standard'
                                placeholder='Comma seperated list of up to 2 tags'
                                id='tags'
                                name='tags'
                                label='Tags'
                                value={tags}
                                onChange={handleChange}
                                type='text'
                                sx={{
                                    width: 300,
                                    margin: '10px 30px 10px 0px',
                                }}
                            />
                            <TextField
                                required
                                margin='normal'
                                variant='standard'
                                placeholder='Comma seperated list of ingredients'
                                id='ingredients'
                                name='ingredients'
                                label='Ingredients'
                                value={ingredients}
                                onChange={handleChange}
                                type='text'
                                sx={{
                                    width: 300,
                                    margin: '10px 30px 10px 0px',
                                }}
                            />
                            <TextField
                                required
                                multiline
                                maxRows={4}
                                placeholder='Please be descriptive and include measurements for ingredients'
                                margin='normal'
                                variant='standard'
                                id='instructions'
                                name='instructions'
                                label='Instructions'
                                value={instructions}
                                onChange={handleChange}
                                type='text'
                                sx={{
                                    width: 630,
                                    margin: '10px 30px 10px 0px',
                                }}
                            />
                            <div className='form-submit'>
                                <Button
                                    variant='contained'
                                    type='submit'
                                    sx={{ marginRight: 2 }}
                                >
                                    Post Recipe
                                </Button>
                                <Button
                                    variant='outlined'
                                    color='primary'
                                    onClick={handleClear}
                                >
                                    Clear Values
                                </Button>
                            </div>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Post
