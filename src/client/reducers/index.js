/*
 *       .                             .o8                     oooo
 *    .o8                             "888                     `888
 *  .o888oo oooo d8b oooo  oooo   .oooo888   .ooooo.   .oooo.o  888  oooo
 *    888   `888""8P `888  `888  d88' `888  d88' `88b d88(  "8  888 .8P'
 *    888    888      888   888  888   888  888ooo888 `"Y88b.   888888.
 *    888 .  888      888   888  888   888  888    .o o.  )88b  888 `88b.
 *    "888" d888b     `V88V"V8P' `Y8bod88P" `Y8bod8P' 8""888P' o888o o888o
 *  ========================================================================
 *  Author:     Chris Brame
 *  Updated:    1/20/19 4:46 PM
 *  Copyright (c) 2014-2019. All rights reserved.
 */

import { combineReducers } from 'redux'

import shared from './shared'
import common from './shared/common'
import modal from './shared/modalReducer'
import sidebar from './sidebarReducer'
import settings from './settings'
import dashboardState from './dashboardReducer'
import ticketsState from './ticketsReducer'
import tagsSettings from './tagsReducer'
import accountsState from './accountsReducer'
import groupsState from './groupsReducer'
import teamsState from './teamsReducer'
import departmentsState from './departmentsReducer'
import noticesState from './noticesReducer'
import searchState from './searchReducer'
import messagesState from './messagesReducer'
import { BubbleChat } from 'flowise-embed-react'
// const IndexReducer = (state = {}, action) => {
//   return {
//     shared: shared(state.shared, action),
//     common: common(state.common, action),
//     modal: modal(state.modal, action),
//     sidebar: sidebar(state.sidebar, action),
//     ticketsState: ticketsState(state.ticketsState, { ...action, sessionUser: shared.sessionUser }),
//     accountsState: accountsState(state.accountsState, action),
//     groupsState: groupsState(state.groupsState, action),
//     teamsState: teamsState(state.teamsState, action),
//     departmentsState: departmentsState(state.departmentsState, action),
//     tagsSettings: tagsSettings(state.tagsSettings, action),
//     settings: settings(state.settings, action)
//   }
// }

const Chatbot = () => {
  return (
      <BubbleChat
          chatflowid="5ec382ab-0ce2-4e3e-b419-c81fdb4e9d16"
          apiHost="https://flowise.onlycraft.cloud"
          theme={{
              button: {
                  backgroundColor: "#3B81F6",
                  right: 20,
                  bottom: 20,
                  size: 48, // small | medium | large | number
                  dragAndDrop: true,
                  iconColor: "white",
                  customIconSrc: "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg",
                  autoWindowOpen: {
                      autoOpen: true, //parameter to control automatic window opening
                      openDelay: 2, // Optional parameter for delay time in seconds
                      autoOpenOnMobile: false, //parameter to control automatic window opening in mobile
                      },
              },
              tooltip: {
                  showTooltip: true,
                  tooltipMessage: 'Hi There 👋!',
                  tooltipBackgroundColor: 'black',
                  tooltipTextColor: 'white',
                  tooltipFontSize: 16,
              },
              chatWindow: {
                  showTitle: true,
                  title: 'Flowise Bot',
                  titleAvatarSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg',
                  showAgentMessages: true,
                  welcomeMessage: 'Hello! This is custom welcome message',
                  errorMessage: 'This is a custom error message',
                  backgroundColor: "#ffffff",
                  backgroundImage: 'enter image path or link', // If set, this will overlap the background color of the chat window.
                  height: 700,
                  width: 400,
                  fontSize: 16,
                  //starterPrompts: ['What is a bot?', 'Who are you?'], // It overrides the starter prompts set by the chat flow passed
                  starterPromptFontSize: 15,
                  clearChatOnReload: false, // If set to true, the chat will be cleared when the page reloads.
                  botMessage: {
                      backgroundColor: "#f7f8ff",
                      textColor: "#303235",
                      showAvatar: true,
                      avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png",
                  },
                  userMessage: {
                      backgroundColor: "#3B81F6",
                      textColor: "#ffffff",
                      showAvatar: true,
                      avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
                  },
                  textInput: {
                      placeholder: 'Type your question',
                      backgroundColor: '#ffffff',
                      textColor: '#303235',
                      sendButtonColor: '#3B81F6',
                      maxChars: 50,
                      maxCharsWarningMessage: 'You exceeded the characters limit. Please input less than 50 characters.',
                      autoFocus: true, // If not used, autofocus is disabled on mobile and enabled on desktop. true enables it on both, false disables it on both.
                      sendMessageSound: true,
                      // sendSoundLocation: "send_message.mp3", // If this is not used, the default sound effect will be played if sendSoundMessage is true.
                      receiveMessageSound: true,
                      // receiveSoundLocation: "receive_message.mp3", // If this is not used, the default sound effect will be played if receiveSoundMessage is true.
                  },
                  feedback: {
                      color: '#303235',
                  },
                  footer: {
                      textColor: '#303235',
                      text: 'Powered by',
                      company: 'Flowise',
                      companyLink: 'https://flowiseai.com',
                  }
              }
          }}
      />
  );
};

const IndexReducer = combineReducers({
  Chatbot,
  shared,
  common,
  searchState,
  modal,
  sidebar,
  dashboardState,
  ticketsState,
  accountsState,
  groupsState,
  teamsState,
  departmentsState,
  noticesState,
  settings,
  tagsSettings,
  messagesState
})

export default IndexReducer
