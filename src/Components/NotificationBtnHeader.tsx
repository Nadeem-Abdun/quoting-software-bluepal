import React, { useState } from 'react'
import { Box, Stack, IconButton, Popper, Typography, Divider } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function NotificationBtnHeader() {
    // Notification popper func
    const [anchorEl, setAnchorEl] = useState(null);
    const handlePoppperClick = (event:any) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const openPopper = Boolean(anchorEl);
    const id = openPopper ? 'notification-popper' : undefined;

    return (
        <Box>
            <IconButton aria-describedby={id} type="button" onClick={handlePoppperClick}><NotificationsIcon sx={{ color: '#b0b7c3' }} /></IconButton>
            <Popper id={id} open={openPopper} anchorEl={anchorEl}>
                <Box
                    sx={{
                        position: "relative",
                        mt: "10px",
                        "&::before": {
                            backgroundColor: "#b0b7c3",
                            content: '""',
                            display: "block",
                            position: "absolute",
                            width: 12,
                            height: 12,
                            top: -6,
                            transform: "rotate(45deg)",
                            left: "calc(50% - 6px)",
                        }
                    }}
                />
                <Box bgcolor='#b0b7c3' borderRadius={2} padding={1}>
                    <Stack height='290px' width='250px' direction='column' spacing={0.5} display='flex' justifyContent='center' alignItems='center'>
                        <Stack height='30%' width='93%' direction='column' bgcolor='#edeff2' borderRadius={2} padding={1} display='flex' justifyContent='center' alignItems='flex-start' >
                            <Typography component='h2' fontSize='14px' fontWeight='bold' sx={{ color: '#344764' }}>Payments Alert!</Typography>
                            <Typography component='h2' fontSize='12px' fontWeight='bold' sx={{ color: '#3f4cbd' }}>Recieved payment from Xyz company.</Typography>
                        </Stack>
                        <Divider />
                        <Stack height='30%' width='93%' direction='column' bgcolor='#edeff2' borderRadius={2} padding={1} display='flex' justifyContent='center' alignItems='flex-start'>
                            <Typography component='h2' fontSize='14px' fontWeight='bold' sx={{ color: '#344764' }}>Server Down!</Typography>
                            <Typography component='h2' fontSize='12px' fontWeight='bold' sx={{ color: '#3f4cbd' }}>The Server was down in the morning.</Typography>
                        </Stack>
                        <Divider />
                        <Stack height='30%' width='93%' direction='column' bgcolor='#edeff2' borderRadius={2} padding={1} display='flex' justifyContent='center' alignItems='flex-start'>
                            <Typography component='h2' fontSize='14px' fontWeight='bold' sx={{ color: '#344764' }}>Bidding Report!</Typography>
                            <Typography component='h2' fontSize='12px' fontWeight='bold' sx={{ color: '#3f4cbd' }}>The Xyz company won the tender.</Typography>
                        </Stack>
                    </Stack>
                </Box>
            </Popper>
        </Box>
    )
}
