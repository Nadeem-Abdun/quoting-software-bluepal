import React, { useState } from 'react'
import { Box, Stack, Typography, Card, MenuItem, FormControl, Select } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CircleChart from '../Img/CircleChart.png';
import CircleChartValues from '../Img/CircleChartValues.png';

export default function OpportunityIndexCard() {
    // Select Func
    const [time, setTime] = useState<string>('1');
    const handleChange = (event:any) => {
        setTime(event.target.value);
    };
    return (
        <>
            <Card sx={{ minHeight: '100%', minWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Stack height='100%' width='100%' direction='column' justifyContent='center' alignItems='center'>
                    {/* Header */}
                    <Box height='14%' width='100%' display='flex' justifyContent='center' alignItems='center' borderBottom={1} borderColor='#cdd5dd' paddingY={0.5}>
                        <Stack height='100%' width='94%' direction='row' justifyContent='space-between' alignItems='center'>
                            <Typography component='h5' fontSize='15px' >Opportunity Index</Typography>
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
                    {/* Chart */}
                    <Stack height='88%' width='100%' direction='column' display='flex' justifyContent='center' alignItems='center'>
                        <Box component='img' src={CircleChart} width='220px' height='170px' />
                        <Box component='img' src={CircleChartValues} width='280px' height='70px' />
                    </Stack>
                </Stack>
            </Card>
        </>
    )
}
