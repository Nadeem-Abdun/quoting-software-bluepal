import React, { useState } from 'react'
import { Box, Stack, Typography, Avatar, AvatarGroup, Card, MenuItem, FormControl, Select } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { highValueList } from './mockdata.js';

export default function HighValueDealCard() {
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
                    <Box height='14%' width='100%' display='flex' justifyContent='center' alignItems='center' borderBottom={1} borderColor='#cdd5dd' paddingBottom={0.4}>
                        <Stack height='100%' width='97%' direction='row' justifyContent='space-between' alignItems='center'>
                            <Typography component='h5' fontSize='15px' >High Value Deals</Typography>
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
                    {/* Total Value Button */}
                    <Box height='11%' width='100%' display='flex' justifyContent='flex-start' alignItems='center'>
                        <Stack height='90%' width='22%' direction='row' spacing={1} bgcolor='#e7e9ff' borderRadius={1} display='flex' justifyContent='center' alignItems='center' paddingY={0.5} marginY={0.7} marginLeft={1.5}>
                            <Typography component='h5' fontSize='15px'>Total Value</Typography><Typography component='h5' fontSize='15px' fontWeight='bold'>$924,883</Typography>
                        </Stack>
                    </Box>
                    {/* Table */}
                    <Box height='75%' width='100%' display='flex' justifyContent='center' alignItems='center' paddingY={1}>
                        <Stack height='100%' width='100%' spacing={1} direction='column' display='flex' justifyContent='center' alignItems='center' mr={1.5}>
                            <Stack height='12%' width='100%' direction='row' display='flex' justifyContent='flex-start' alignItems='center'>
                                <Box height='100%' width='20%' display='flex' justifyContent='flex-start' alignItems='center' marginLeft={2}>
                                    <Typography component='h1' fontSize='13px' fontWeight='bold' color='#8a95a6'>ACCOUNT NAME</Typography>
                                </Box>
                                <Box height='100%' width='33%' display='flex' justifyContent='flex-start' alignItems='center'>
                                    <Typography component='h1' fontSize='13px' fontWeight='bold' color='#8a95a6'>OPPORTUNITY</Typography>
                                </Box>
                                <Box height='100%' width='13%' display='flex' justifyContent='flex-start' alignItems='center' marginRight={3}>
                                    <Typography component='h1' fontSize='13px' fontWeight='bold' color='#8a95a6'>DEAL SIZE</Typography>
                                </Box>
                                <Box height='100%' width='16%' display='flex' justifyContent='flex-start' alignItems='center'>
                                    <Typography component='h1' fontSize='13px' fontWeight='bold' color='#8a95a6'>APPROVERS</Typography>
                                </Box>
                                <Box height='100%' width='18%' display='flex' justifyContent='center' alignItems='center'>
                                    <Typography component='h1' fontSize='12.5px' fontWeight='bold' color='#8a95a6'>PENDING DAYS</Typography>
                                </Box>
                            </Stack>
                            {highValueList.map((data) => {
                                const { name, opportunity, dealSize, avatId1, avatId2, avatId3, pending } = data
                                return (
                                    <Stack height='12%' width='100%' direction='row' display='flex' justifyContent='flex-start' alignItems='center'>
                                        <Box height='100%' width='20%' display='flex' justifyContent='flex-start' alignItems='center' marginLeft={2}>
                                            <Typography component='h1' fontSize='13px' fontWeight='medium' color='#495a74'>{name}</Typography>
                                        </Box>
                                        <Box height='100%' width='33%' display='flex' justifyContent='flex-start' alignItems='center'>
                                            <Typography component='h1' fontSize='13px' fontWeight='medium' color='#495a74'>{opportunity}</Typography>
                                        </Box>
                                        <Box height='100%' width='13%' display='flex' justifyContent='flex-start' alignItems='center' marginRight={3}>
                                            <Typography component='h1' fontSize='13px' fontWeight='bold' color='#495a74'>{dealSize}</Typography>
                                        </Box>
                                        <Box height='100%' width='16%' display='flex' justifyContent='flex-start' alignItems='center'>
                                            <AvatarGroup>
                                                {avatId1 && <Avatar sx={{ width: 20, height: 20 }} alt="Remy Sharp" src={avatId1} />}
                                                {avatId2 && <Avatar sx={{ width: 20, height: 20 }} alt="Travis Howard" src={avatId2} />}
                                                {avatId3 && <Avatar sx={{ width: 20, height: 20 }} alt="Cindy Baker" src={avatId3} />}
                                            </AvatarGroup>
                                        </Box>
                                        <Box height='100%' width='18%' display='flex' justifyContent='center' alignItems='center'>
                                            <Typography component='h1' fontSize='13px' fontWeight='bold' color='#495a74'>{pending}</Typography>
                                        </Box>
                                    </Stack>
                                )
                            })
                            }
                        </Stack>
                    </Box>
                </Stack>
            </Card>
        </>
    )
}
