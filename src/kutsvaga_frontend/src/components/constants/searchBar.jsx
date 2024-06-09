import SearchIcon from '@mui/icons-material/Search';
import { Box, Grid } from '@material-ui/core';
import { TextField, Typography } from "@mui/material"
import CommonButton from './commonButton';
import './searchStyled/footer.css'

function SearchBar({searchValue, onClick, onChange, placeholder, title, paid}){
    return(
        <Grid bgcolor={"background.default"} >
            <section className="newletter">
                <div className="container flexSB">
                    <div className="left">
                        <Typography sx={{ marginLeft:"5%" }} variant="h4" gutterBottom> {title} </Typography>
                    </div>
                    <div className="right row">
                        <div>
                            <form>
                            
                                <Box sx={{display: 'flex', gap: 1 }}>
                                    <SearchIcon sx={{marginRight:'30px', marginLeft:'30px',marginTop:'9px', }} />
                                    <TextField p={3}
                                        sx={{width:'50%', fontSize:'1.1rem',marginRight:'40px'}}
                                        placeholder={placeholder}
                                        label="searchValue"
                                        name="searchValue"
                                        variant="standard"
                                        onChange={onChange}
                                        value={searchValue}
                                                />
                                    { paid ? ( <CommonButton 
                                        size='large'
                                        variant = 'contained'
                                        onClick={onClick}
                                    >
                                        Search
                                    </CommonButton> ) : ( null ) }
                                </Box>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Grid>
    )
}export default SearchBar