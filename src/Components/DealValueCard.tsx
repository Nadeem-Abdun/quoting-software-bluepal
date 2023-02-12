import React, { useState } from 'react'
import { Box, Stack, Typography, Grid, IconButton, Card, Divider, MenuItem, FormControl, Select } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BarChart from '../Img/BarChart.png';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import PercentIcon from '@mui/icons-material/Percent';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function DealValueCard() {
    // Select Func
    const [time, setTime] = useState<string>('1');
    const handleChange = (event:any) => {
        setTime(event.target.value);
    };
    return (
        <>
            <Card sx={{ minHeight: '100%', minWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {/* Overrall Bar Chart Box */}
                <Stack height='100%' width='100%' direction='column' justifyContent='center' alignItems='center'>
                    {/* Header */}
                    <Box height='13%' width='100%' display='flex' justifyContent='center' alignItems='center' borderBottom={1} borderColor='#cdd5dd' paddingY={0.5}>
                        <Stack height='100%' width='97%' direction='row' justifyContent='space-between' alignItems='center'>
                            <Typography component='h5' fontSize='15px' >Deal Value</Typography>
                            <Box height='30px' width='130px' border={1} borderRadius={2} borderColor='#cdd5dd'>
                                <FormControl sx={{ height: '30px', width: '130px' }}>
                                    <Select value={time} onChange={handleChange} style={{ height: '30px', width: '130px', paddingTop: '1px !important', paddingLeft: '1px !important', paddingBottom: '1px !important', paddingRight: '25px !important' }} displayEmpty>
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
                    {/* Main Box */}
                    <Stack height='90%' width='100%' direction='row' justifyContent='center' alignItems='center' marginBottom={0.8} paddingY={0.3}>
                        <Box height='100%' width='50%' display='flex' justifyContent='center' alignItems='center'>
                            <Stack height='100%' width='100%' direction='column' spacing={1} justifyContent='center' alignItems='center'>
                                {/* Deal Value Grid */}
                                {/* GRID-1 */}
                                <Grid container justifyContent='center' alignItems='center'>
                                    <Grid item xs={2} sm={2} md={2} lg={2} display='flex' justifyContent='center'>
                                        <IconButton sx={{ bgcolor: '#dedfff' }}><ThumbUpOffAltIcon sx={{ color: '#5967ff' }} fontSize='medium' /></IconButton>
                                    </Grid>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <Typography component='h1' fontSize='18px' fontWeight='bold' display='flex' justifyContent='flex-start' marginLeft={1.5}>1,273</Typography>
                                        <Typography component='h1' fontSize='13px' fontWeight='medium' display='flex' justifyContent='flex-start' marginLeft={1.5}>Deals Won</Typography>
                                    </Grid>
                                    <Grid item xs={3} sm={3} md={3} lg={3}>
                                        <Typography component='h1' fontSize='18px' fontWeight='bold' display='flex' justifyContent='flex-start' marginLeft={2}>$8,332,004</Typography>
                                        <Typography component='h1' fontSize='13px' fontWeight='medium' display='flex' justifyContent='flex-start' marginLeft={2}>Net Value</Typography>
                                    </Grid>
                                    <Grid item xs={3} sm={3} md={3} lg={3} display='flex' justifyContent='center'>
                                        <ArrowCircleUpIcon sx={{ color: '#5acb80', fontSize: '20px', marginRight: '15px' }} />
                                    </Grid>
                                    {/* GRID-2 */}
                                    <Grid item xs={2} sm={2} md={2} lg={2} display='flex' justifyContent='center' mt={2}>
                                        <IconButton sx={{ bgcolor: '#ffeade' }}><PercentIcon sx={{ color: '#ff9962' }} fontSize='medium' /></IconButton>
                                    </Grid>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <Typography component='h1' fontSize='18px' fontWeight='bold' display='flex' justifyContent='flex-start' marginLeft={1.5}>13%</Typography>
                                        <Typography component='h1' fontSize='13px' fontWeight='medium' display='flex' justifyContent='flex-start' marginLeft={1.5}>Avg. Discount</Typography>
                                    </Grid>
                                    <Grid item xs={3} sm={3} md={3} lg={3}>
                                        <Typography component='h1' fontSize='18px' fontWeight='bold' display='flex' justifyContent='flex-start' marginLeft={2}>$873,232</Typography>
                                        <Typography component='h1' fontSize='13px' fontWeight='medium' display='flex' justifyContent='flex-start' marginLeft={2}>Discount Value</Typography>
                                    </Grid>
                                    <Grid item xs={3} sm={3} md={3} lg={3} display='flex' justifyContent='center'>
                                        <ArrowCircleUpIcon sx={{ color: '#5acb80', fontSize: '20px', marginRight: '15px' }} />
                                    </Grid>
                                    {/* GRID-3 */}
                                    <Grid item xs={2} sm={2} md={2} lg={2} display='flex' justifyContent='center' mt={2}>
                                        <IconButton sx={{ bgcolor: '#fbd9e1' }}><ThumbDownOffAltIcon sx={{ color: '#ec3c6a' }} fontSize='medium' /></IconButton>
                                    </Grid>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <Typography component='h1' fontSize='18px' fontWeight='bold' display='flex' justifyContent='flex-start' marginLeft={1.5}>243</Typography>
                                        <Typography component='h1' fontSize='13px' fontWeight='medium' display='flex' justifyContent='flex-start' marginLeft={1.5}>Deals Lost</Typography>
                                    </Grid>
                                    <Grid item xs={3} sm={3} md={3} lg={3}>
                                        <Typography component='h1' fontSize='18px' fontWeight='bold' display='flex' justifyContent='flex-start' marginLeft={2}>$743,221</Typography>
                                        <Typography component='h1' fontSize='13px' fontWeight='medium' display='flex' justifyContent='flex-start' marginLeft={2}>Net Value</Typography>
                                    </Grid>
                                    <Grid item xs={3} sm={3} md={3} lg={3} display='flex' justifyContent='center'>
                                        <ArrowCircleDownIcon sx={{ color: '#ef5d83', fontSize: '20px', marginRight: '15px' }} />
                                    </Grid>
                                    {/* GRID-4 */}
                                    <Grid item xs={2} sm={2} md={2} lg={2} display='flex' justifyContent='center' mt={2}>
                                        <IconButton sx={{ bgcolor: '#ececec' }}><AccessTimeIcon sx={{ color: '#a3a3a3' }} fontSize='medium' /></IconButton>
                                    </Grid>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <Typography component='h1' fontSize='18px' fontWeight='bold' display='flex' justifyContent='flex-start' marginLeft={1.5}>78 Days</Typography>
                                        <Typography component='h1' fontSize='13px' fontWeight='medium' display='flex' justifyContent='flex-start' marginLeft={1.5}>Average Deal Close Time</Typography>
                                    </Grid>
                                    <Grid item xs={3} sm={3} md={3} lg={3}>

                                    </Grid>
                                    <Grid item xs={3} sm={3} md={3} lg={3} display='flex' justifyContent='center'>
                                        <ArrowCircleUpIcon sx={{ color: '#5acb80', fontSize: '20px', marginRight: '15px' }} />
                                    </Grid>
                                </Grid>
                            </Stack>
                        </Box>
                        <Divider orientation="vertical" flexItem />
                        {/* Bar Chart Image Column */}
                        <Box height='100%' width='50%' display='flex' justifyContent='center' alignItems='center'>
                            <Box component='img' src={BarChart} width='450px' height='230px' />
                        </Box>
                    </Stack>
                </Stack>
            </Card>
        </>
    )
}
