import React, { lazy } from 'react'

import Home from "@mui/icons-material/Home"
import Explore from "@mui/icons-material/Explore"
import PersonSearch from "@mui/icons-material/PersonSearch"
import CatchingPokemon from "@mui/icons-material/CatchingPokemon"
import ClosedCaption from "@mui/icons-material/ClosedCaption"
import SaveAs from "@mui/icons-material/SaveAs"
import TourIcon from "@mui/icons-material/Tour"
import LoginOutlined from "@mui/icons-material/LoginOutlined"
import LogoutOutlined from "@mui/icons-material/LogoutOutlined"
import AddchartIcon from '@mui/icons-material/Addchart';
import Discord from '../../pages/discord'
import { Button } from 'bootstrap'
const Login = lazy(() => import("../../pages/Login/Login"))
const Courser = lazy(() => import("../../pages/Courser"))
const Following = lazy(() => import("../../pages/Following"))
const Tour = lazy(() => import("../../pages/Tour"))
const Trending = lazy(() => import("../../pages/Trending"))
const Feedback = lazy(() => import("../../pages/Feedback"))
const discord = lazy(() => import("../../pages/discord"))
const Register = lazy(() => import("../../pages/Register/Register"))
const Createor = lazy(() => import("../../pages/Createor"))
const Profile = lazy(() => import("../../pages/profile/Profile"))


export default [

    {
        label: "home",
        path: "/",
        icon: <Home />,
        isNested: false,
        showInMenu: true,
        topbar: true,
    },
    {
        label: "Courses",
        path: "courses",
        icon: <AddchartIcon />,
        component: <Courser />,
        isNested: true,
        showInMenu: true,
    },
    {
        label: "Trending",
        path: "trending",
        component: <Trending />,
        icon: <Explore />,
        isNested: false,
        showInMenu: true,
    },
    {
        label: "Following",
        path: "following",
        icon: <PersonSearch />,
        component: <Following />,
        isNested: false,
        showInMenu: true,
    },
    {
        label: "Discord",
        path: "discord",
        icon: <CatchingPokemon />,
        component: <Discord />,
        isNested: false,
        showInMenu: true,
    },

    {
        label: "Createor Access",
        path: "createor",
        icon: <ClosedCaption />,
        component: <Createor />,
        isNested: false,
        showInMenu: true,
        topbar: true,
    },
    {
        label: "Send Feedback",
        path: "feedback",
        icon: <SaveAs />,
        component: <Feedback />,
        isNested: false,
        showInMenu: true,
    },
    {
        label: "User Tour",
        path: "tour",
        icon: <TourIcon />,
        component: <Tour />,
        isNested: false,
        showInMenu: true,
    },
    {
        label: "Register",
        path: "register",
        icon: <LoginOutlined />,
        component: <Register />,
        isNested: false,
        showInMenu: false,
    },
    {
        label: "Logout",
        path: "logout",
        icon: <LogoutOutlined />,
        isNested: false,
        showInMenu: false,
    },

    {
        label: "Login",
        path: "login",
        icon: <LoginOutlined />,
        isNested: false,
        component: <Login />,
        showInMenu: true,
    },

]