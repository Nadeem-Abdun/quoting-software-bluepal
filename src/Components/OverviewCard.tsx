import React, { useState } from 'react'
import { Box, Stack, Typography, Grid, IconButton, Card, Divider, MenuItem, FormControl, Select } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

export default function OverviewCard() {
    // Select Func
    const [time, setTime] = useState<string>('1');
    const handleChange = (event:any) => {
        setTime(event.target.value);
    };
    return (
        <>
            <Card sx={{ minHeight: '100%', minWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                <Stack height='100%' width='100%' direction='column' justifyContent='center' alignItems='center'>
                    {/* Header */}
                    <Box height='14%' width='100%' display='flex' justifyContent='center' alignItems='center' borderBottom={1} borderColor='#cdd5dd' paddingY={0.5}>
                        <Stack height='100%' width='97%' direction='row' justifyContent='space-between' alignItems='center'>
                            <Typography component='h5' fontSize='15px' >Overview</Typography>
                            <Box height='30px' width='130px' border={1} borderRadius={2} borderColor='#cdd5dd'>
                                <FormControl sx={{ height: '30px', width: '130px' }}>
                                    <Select value={time} onChange={handleChange} style={{ height:'30px', width:'130px',paddingTop: '1px !important', paddingLeft: '1px !important', paddingBottom: '1px !important', paddingRight: '25px !important' }} displayEmpty>
                                        <MenuItem value='1' sx={{ height: '30%', width: '100%' }}>
                                            <Stack direction='row' display='flex' justifyContent='space-evenly' alignItems='center'>
                                                <CalendarTodayIcon sx={{ color: '#606dff', fontSize: '18px', padding: '5px' }} />
                                                <Typography component='h5' fontSize='13px'>All Time</Typography>
                                            </Stack>
                                        </MenuItem>
                                        <MenuItem value='2' sx={{ height: '30%', width: '100%' }}>
                                            <Stack direction='row' display='flex' justifyContent='space-evenly' alignItems='center'>
                                                <CalendarTodayIcon sx={{ color: '#606dff', fontSize: '18px', padding: '5px' }} />
                                                <Typography component='h5' fontSize='13px'>Yearly</Typography>
                                            </Stack>
                                        </MenuItem>
                                        <MenuItem value='3' sx={{ height: '30%', width: '100%' }}>
                                            <Stack direction='row' display='flex' justifyContent='space-evenly' alignItems='center'>
                                                <CalendarTodayIcon sx={{ color: '#606dff', fontSize: '18px', padding: '5px' }} />
                                                <Typography component='h5' fontSize='13px'>Monthly</Typography>
                                            </Stack>
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Stack>
                    </Box>
                    {/* Main */}
                    <Box height='63%' width='99%' display='flex' justifyContent='center' alignItems='center' marginY={1}>
                        <Stack height='100%' width='100%' direction='row' justifyContent='center' alignItems='center'>
                            <Box height='100%' width='50%' display='flex' justifyContent='center' alignItems='center'>
                                <Grid container justifyContent='center' alignItems='center' my={1} mx={1}>
                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                        <Typography component='h1' fontSize='13px' fontWeight='bold' display='flex' justifyContent='flex-start' color='#b1b6bd'>Docs in Pipeline</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12} my={2}>
                                        <Stack height='100%' width='100%' direction='row' justifyContent='flex-start' alignItems='center'>
                                            <Box height='100%' width='15%' display='flex' justifyContent='center' alignItems='center'>
                                                <IconButton sx={{ bgcolor: '#dedfff' }}><DescriptionOutlinedIcon sx={{ color: '#5967ff' }} fontSize='medium' /></IconButton>
                                            </Box>
                                            <Box height='100%' width='80%' marginLeft={2.5}>
                                                <Typography component='h1' fontSize='25px' fontWeight='bold' display='flex' justifyContent='flex-start'>1,844</Typography>
                                                <Typography component='h1' fontSize='13px' fontWeight='bold' display='flex' justifyContent='flex-start' color='#b1b6bd'>$924,883.00</Typography>
                                            </Box>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={3} sm={3} md={3} lg={3}>
                                        <Typography component='h5' fontSize='15px' color='#455671' fontWeight='bold'>732</Typography>
                                        <Typography component='h5' fontSize='12px' color='#8c96a7'>Quotes</Typography>
                                    </Grid>
                                    <Grid item xs={3} sm={3} md={3} lg={3}>
                                        <Typography component='h5' fontSize='15px' color='#455671' fontWeight='bold'>313</Typography>
                                        <Typography component='h5' fontSize='12px' color='#8c96a7'>SLA</Typography>
                                    </Grid>
                                    <Grid item xs={3} sm={3} md={3} lg={3}>
                                        <Typography component='h5' fontSize='15px' color='#455671' fontWeight='bold'>464</Typography>
                                        <Typography component='h5' fontSize='12px' color='#8c96a7'>SOW</Typography>
                                    </Grid>
                                    <Grid item xs={3} sm={3} md={3} lg={3}>
                                        <Typography component='h5' fontSize='15px' color='#455671' fontWeight='bold'>665</Typography>
                                        <Typography component='h5' fontSize='12px' color='#8c96a7'>MSA</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box height='100%' width='50%' display='flex' justifyContent='center' alignItems='center'>
                                <Grid container justifyContent='center' alignItems='center' my={1} mx={1}>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography component='h1' fontSize='20px' fontWeight='bold' display='flex' justifyContent='flex-start'>623</Typography>
                                        <Typography component='h1' fontSize='13px' fontWeight='bold' display='flex' justifyContent='flex-start' color='#b1b6bd'>$823,933</Typography>
                                        <Box bgcolor='#dedfff' width='40px' borderRadius={1.5} paddingX={1} mt={0.5}><Typography component='h1' fontSize='12px' fontWeight='bold' display='flex' justifyContent='flex-start' color='#6a76ff'>Drafts</Typography></Box>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <Typography component='h1' fontSize='20px' fontWeight='bold' display='flex' justifyContent='flex-start'>423</Typography>
                                        <Typography component='h1' fontSize='13px' fontWeight='bold' display='flex' justifyContent='flex-start' color='#b1b6bd'>$133,311</Typography>
                                        <Box bgcolor='#ffeade' width='100px' borderRadius={1.5} paddingX={1} mt={0.5}><Typography component='h1' fontSize='11.5px' fontWeight='bold' display='flex' justifyContent='flex-start' color='#ff9359'>Pending Approval</Typography></Box>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6} marginTop={1}>
                                        <Typography component='h1' fontSize='20px' fontWeight='bold' display='flex' justifyContent='flex-start'>499</Typography>
                                        <Typography component='h1' fontSize='13px' fontWeight='bold' display='flex' justifyContent='flex-start' color='#b1b6bd'>$102,333</Typography>
                                        <Box bgcolor='#def5ff' width='90px' borderRadius={1.5} paddingX={1} mt={0.5}><Typography component='h1' fontSize='12px' fontWeight='bold' display='flex' justifyContent='flex-start' color='#79bfdb'>Sent To Client</Typography></Box>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6} marginTop={1}>
                                        <Typography component='h1' fontSize='20px' fontWeight='bold' display='flex' justifyContent='flex-start'>243</Typography>
                                        <Typography component='h1' fontSize='13px' fontWeight='bold' display='flex' justifyContent='flex-start' color='#b1b6bd'>$322,333</Typography>
                                        <Box bgcolor='#e2ffde' width='60px' borderRadius={1.5} paddingX={1} mt={0.5}><Typography component='h1' fontSize='12px' fontWeight='bold' display='flex' justifyContent='flex-start' color='#63ce86'>Sigining</Typography></Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Stack>
                    </Box>
                    {/* Footer */}
                    <Box height='23%' width='100%' display='flex' justifyContent='center' alignItems='center' borderTop={1} borderColor='#cdd5dd' paddingY={1.2}>
                        <Stack height='95%' width='97%' direction='row' justifyContent='space-between' alignItems='center'>
                            <Stack height='100%' width='25%' direction='column' justifyContent='space-between' alignItems='flex-start'>
                                <Typography component='h5' fontSize='12px' color='#8c96a7'>Net Value in Pipeline</Typography>
                                <Typography component='h5' fontSize='15px' color='#455671' fontWeight='bold'>$924,883</Typography>
                            </Stack>
                            <Stack height='100%' width='25%' direction='column' justifyContent='space-between' alignItems='flex-start'>
                                <Typography component='h5' fontSize='12px' color='#8c96a7'>Achieved So Far</Typography>
                                <Typography component='h5' fontSize='15px' color='#455671' fontWeight='bold'>$424,393</Typography>
                            </Stack>
                            <Divider orientation="vertical" flexItem />
                            <Stack height='100%' width='25%' direction='column' justifyContent='space-between' alignItems='flex-start' marginLeft={3}>
                                <Typography component='h5' fontSize='12px' color='#8c96a7'>Difference</Typography>
                                <Typography component='h5' fontSize='15px' color='#ffae83' fontWeight='bold'>$135,232</Typography>
                            </Stack>
                            <Stack height='100%' width='25%' direction='column' justifyContent='space-between' alignItems='flex-start'>
                                <Typography component='h5' fontSize='12px' color='#8c96a7'>Target</Typography>
                                <Typography component='h5' fontSize='15px' color='#455671' fontWeight='bold'>$2,000,000</Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Card >
        </>
    )
}
