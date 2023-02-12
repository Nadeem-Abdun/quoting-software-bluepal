import React, { useState } from 'react'
import {
    AppBar, Box, IconButton, Stack, Tab, Menu, MenuItem, Avatar, styled, Typography, Drawer,
    Button, Dialog, DialogTitle, DialogContent, DialogActions
} from '@mui/material'
import { TabContext, TabList } from '@mui/lab'
import HelpIcon from '@mui/icons-material/Help';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PublicIcon from '@mui/icons-material/Public';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import HandshakeIcon from '@mui/icons-material/Handshake';
import WebhookIcon from '@mui/icons-material/Webhook';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import Logo from '../Img/Logo.png'
import Menus from '../Img/Menu.png'
import NotificationBtnHeader from './NotificationBtnHeader';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsBtnHeader from './SettingsBtnHeader';

export default function Header() {
    // Tabs Functionality
    const [value, setValue] = useState<string>('1')
    const handleOnChange = (event:any, newValue:string) => {
        setValue(newValue)
    }
    // Menu Functionality
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    // Styled Components
    const StyledAppBar = styled(AppBar)({
        background: "#ffffff",
        height: '100%',
    })
    const StyledTab = styled(Tab)({
        minHeight: '50px',
        width: '50px',
        textTransform: 'capitalize',
        fontWeight: 'bold',
    })
    const StyledTab1 = styled(Tab)({
        minHeight: '50px',
        width: '110px',
        textTransform: 'capitalize',
        fontWeight: 'bold'
    })
    const tabsArr = [
        <Typography component='h2' fontSize='14px' fontWeight='bold' sx={{ color: '#3f4cbd' }}>Dashboard</Typography>,
    ]
    // Sliding Sidebar state
    const [slideOpen, setSlideOpen] = useState(false)
    const StyledBtn = styled(Button)({
        backgroundColor: '#ffffff',
        color: '#3d4bbc',
        textTransform: 'capitalize',
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'flex-start',
        paddingLeft: '20px'
    })
    // FAQ Dialog Func
    const [openDialog, setOpenDialog] = useState(false);

    return (
        <>
            <Box height='100%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                <StyledAppBar position="static">
                    <Stack height='100%' width='100%' direction='row' justifyContent='center' alignItems='center'>
                        {/* MenuBox */}
                        <Box height='100%' width='6%' display='flex' justifyContent='center' alignItems='center'>
                            <IconButton onClick={() => { setSlideOpen(true) }}>
                                <Box component='img' src={Menus} width='95%' />
                            </IconButton>
                            {/* Sliding Drawer */}
                            <Drawer anchor='left' open={slideOpen} onClose={() => { setSlideOpen(false) }}>
                                <Stack height='100vh' width='15vw' direction='column' spacing={2} padding={2} display='flex' justifyContent='center' alignItems='center' bgcolor='#edeff2' role='presentation'>
                                    <Box height='10%' width='100%' component='img' src={Logo} />
                                    <Stack height='90%' width='100%' direction='column' spacing={2}>
                                        <StyledBtn variant='text' startIcon={<DashboardIcon />} fullWidth>Dashboard</StyledBtn>
                                        <StyledBtn variant='text' startIcon={<PublicIcon />} fullWidth>Opportunities</StyledBtn>
                                        <StyledBtn variant='text' startIcon={<AccountBoxIcon />} fullWidth>Account</StyledBtn>
                                        <StyledBtn variant='text' startIcon={<HowToRegIcon />} fullWidth>Clients</StyledBtn>
                                        <StyledBtn variant='text' startIcon={<PrecisionManufacturingIcon />} fullWidth>Product</StyledBtn>
                                        <StyledBtn variant='text' startIcon={<HandshakeIcon />} fullWidth>Deals</StyledBtn>
                                        <StyledBtn variant='text' startIcon={<WebhookIcon />} fullWidth>Pipeline</StyledBtn>
                                        <StyledBtn variant='text' startIcon={<DocumentScannerIcon />} fullWidth>Documents</StyledBtn>
                                    </Stack>
                                </Stack>
                            </Drawer>
                        </Box>
                        {/* LogoBox */}
                        <Box height='100%' width='12%' display='flex' justifyContent='center' alignItems='center' marginRight={3}>
                            <Box component='img' src={Logo} width='95%' />
                        </Box>
                        {/* TabsBox */}
                        <Box height='100%' width='66%' display='flex' justifyContent='flex-start' alignItems='center'>
                            <TabContext value={value}>
                                <TabList onChange={handleOnChange} orientation='horizontal' sx={{ indicatorColor: '#3a48bb' }}>
                                    <StyledTab label={tabsArr[0]} value='1' />
                                    <StyledTab1 label='Opportunities' value='2' />
                                    <StyledTab label='Account' value='3' />
                                    <StyledTab label='Clients' value='4' />
                                    <StyledTab label='Product' value='5' />
                                    <StyledTab label='Deals' value='6' />
                                    <StyledTab label='Pipeline' value='7' />
                                    <StyledTab label='Documents' value='8' />
                                </TabList>
                            </TabContext>
                        </Box>
                        {/* NotificationsBox */}
                        <Box height='100%' width='18%' display='flex' justifyContent='center' alignItems='center'>
                            <Stack direction='row'>
                                <NotificationBtnHeader />
                                <IconButton onClick={() => { setOpenDialog(true) }}><HelpIcon sx={{ color: '#b0b7c3' }} /></IconButton>
                                <SettingsBtnHeader />
                                <Avatar alt="Alex Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" sx={{ marginLeft: '10px' }} />
                                <IconButton onClick={handleClick} size='small'><ArrowDropDownIcon /></IconButton>
                            </Stack>
                        </Box>
                    </Stack>
                </StyledAppBar>
                {/* Menu Box For Profile */}
                <Menu open={open} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right', }} transformOrigin={{ vertical: 'top', horizontal: 'right', }}>
                    <MenuItem onClick={handleClose}><AccountBoxIcon fontSize='small' />Profile</MenuItem>
                    <MenuItem onClick={handleClose}><AccountBalanceWalletIcon fontSize='small' />My account</MenuItem>
                    <MenuItem onClick={handleClose}><LogoutIcon fontSize='small' />Logout</MenuItem>
                </Menu>
                {/* Dialog Box For FAQ's */}
                <Dialog open={openDialog} onClose={() => { setOpenDialog(false) }}>
                    <DialogTitle>
                        <Typography variant='h3' fontSize='18px' fontWeight='bold'>Frequently Asked Question!</Typography>
                    </DialogTitle>
                    <DialogContent>
                        <Stack direction='column' spacing={2.5} display='flex' justifyContent='center' alignItems='flex-start'>
                            <Stack direction='column' spacing={1} width='100%' display='flex' justifyContent='center' alignItems='flex-start'>
                                <Typography variant='h5' fontSize='16px' fontWeight='medium'>Q - Is there a free trail available?</Typography>
                                <Typography variant='h5' fontSize='13px' fontWeight='light'>Ans - Yes, you can try this app for free for 30days.</Typography>
                            </Stack>
                            <Stack direction='column' spacing={1} width='100%' display='flex' justifyContent='center' alignItems='flex-start'>
                                <Typography variant='h5' fontSize='16px' fontWeight='medium'>Q - Can i change my plan later?</Typography>
                                <Typography variant='h5' fontSize='13px' fontWeight='light'>Ans - Of course, You can change your plan anytime.</Typography>
                            </Stack>
                            <Stack direction='column' spacing={1} width='100%' display='flex' justifyContent='center' alignItems='flex-start'>
                                <Typography variant='h5' fontSize='16px' fontWeight='medium'>Q - What is the cancellation policy?</Typography>
                                <Typography variant='h5' fontSize='13px' fontWeight='light'>Ans - You can cancel your plan anytime.</Typography>
                            </Stack>
                        </Stack>
                    </DialogContent>
                    <DialogActions>
                        <Button variant='contained' size='large' onClick={() => { setOpenDialog(false) }}>Close</Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </>
    )
}
