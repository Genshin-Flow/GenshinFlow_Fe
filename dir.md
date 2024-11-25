<pre>
  📦src
 ┣ 📂app
 ┃ ┣ 📂Admin
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂AllHistory
 ┃ ┃ ┣ 📜HistoryData.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┗ 📂[...nextauth]
 ┃ ┃ ┃ ┃ ┣ 📜authOptions.ts
 ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┣ 📂login
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┣ 📂loginToken
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┣ 📂oauthCookie
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┣ 📂refreshAccessToken
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┣ 📂searchUser
 ┃ ┃ ┃ ┗ 📜searchUser.ts
 ┃ ┃ ┗ 📂signUp
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┣ 📂ChangePassword
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂error
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂Login
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂Mypage
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂nextJenniper
 ┃ ┃ ┗ 📜JenniperSet.tsx
 ┃ ┣ 📂PcMypage
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📜layout.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂components
 ┃ ┣ 📂Footer
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂Loading
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┗ 📜.keep
 ┣ 📂data
 ┃ ┣ 📂AdminSideListItem
 ┃ ┃ ┗ 📜adminSideListItem.ts
 ┃ ┣ 📂DisciplinaryItems
 ┃ ┃ ┗ 📜disciplinaryItems.ts
 ┃ ┗ 📂SvgUrl
 ┃ ┃ ┗ 📜svg.ts
 ┣ 📂features
 ┃ ┣ 📂admin
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📂header
 ┃ ┃ ┃ ┃ ┗ 📜Header.tsx
 ┃ ┃ ┃ ┣ 📂inquiryHistory
 ┃ ┃ ┃ ┃ ┗ 📜InquiryHistory.tsx
 ┃ ┃ ┃ ┣ 📂popUp
 ┃ ┃ ┃ ┃ ┣ 📂disciplinaryItems
 ┃ ┃ ┃ ┃ ┃ ┣ 📜DisciplinaryItems.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜SelectOption.tsx
 ┃ ┃ ┃ ┃ ┣ 📂evidencePhoto
 ┃ ┃ ┃ ┃ ┃ ┣ 📜EvidencePhoto.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜ImageBox.tsx
 ┃ ┃ ┃ ┃ ┗ 📂userInfo
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Reporter.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜ReportTarget.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜UserInfo.tsx
 ┃ ┃ ┃ ┣ 📂punishmentHistory
 ┃ ┃ ┃ ┃ ┣ 📜PunishmentHistory.tsx
 ┃ ┃ ┃ ┃ ┗ 📜PunishmentList.tsx
 ┃ ┃ ┃ ┣ 📂reportManagement
 ┃ ┃ ┃ ┃ ┣ 📜ReportList.tsx
 ┃ ┃ ┃ ┃ ┗ 📜ReportManagement.tsx
 ┃ ┃ ┃ ┣ 📂sideMenu
 ┃ ┃ ┃ ┃ ┣ 📜SideMenu.tsx
 ┃ ┃ ┃ ┃ ┗ 📜TabList.tsx
 ┃ ┃ ┃ ┣ 📂statistics
 ┃ ┃ ┃ ┃ ┗ 📜Statistics.tsx
 ┃ ┃ ┃ ┣ 📂table
 ┃ ┃ ┃ ┃ ┗ 📜Table.tsx
 ┃ ┃ ┃ ┗ 📂tableHeader
 ┃ ┃ ┃ ┃ ┗ 📜TableHeader.tsx
 ┃ ┃ ┗ 📂dragLogic
 ┃ ┃ ┃ ┗ 📜drag.ts
 ┃ ┣ 📂loginSignUp
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┣ 📂emailCheck
 ┃ ┃ ┃ ┃ ┗ 📜emailValidation.ts
 ┃ ┃ ┃ ┣ 📂mailAuth
 ┃ ┃ ┃ ┃ ┗ 📜mailAuth.ts
 ┃ ┃ ┃ ┣ 📂passwordCheck
 ┃ ┃ ┃ ┃ ┗ 📜passwordValidation.ts
 ┃ ┃ ┃ ┗ 📂uidCheck
 ┃ ┃ ┃ ┃ ┗ 📜passwordValidation.ts
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📂button
 ┃ ┃ ┃ ┃ ┣ 📜Button.tsx
 ┃ ┃ ┃ ┃ ┣ 📜ForgotPassword.tsx
 ┃ ┃ ┃ ┃ ┣ 📜GoBack.tsx
 ┃ ┃ ┃ ┃ ┗ 📜OauthButton.tsx
 ┃ ┃ ┃ ┣ 📂checkBox
 ┃ ┃ ┃ ┃ ┣ 📜Checkbox.tsx
 ┃ ┃ ┃ ┃ ┗ 📜TextLabelBox.tsx
 ┃ ┃ ┃ ┣ 📂Input
 ┃ ┃ ┃ ┃ ┗ 📜Input.tsx
 ┃ ┃ ┃ ┣ 📂line
 ┃ ┃ ┃ ┃ ┗ 📜line.tsx
 ┃ ┃ ┃ ┣ 📂modal
 ┃ ┃ ┃ ┃ ┣ 📜Modal.tsx
 ┃ ┃ ┃ ┃ ┗ 📜PrivacyPolicy.tsx
 ┃ ┃ ┃ ┣ 📂pageSubTitle
 ┃ ┃ ┃ ┃ ┗ 📜SubTitle.tsx
 ┃ ┃ ┃ ┣ 📂signIn
 ┃ ┃ ┃ ┃ ┗ 📜SignInAuth.tsx
 ┃ ┃ ┃ ┗ 📂signUp
 ┃ ┃ ┃ ┃ ┗ 📜AuthMail.tsx
 ┃ ┃ ┣ 📂mobile
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┗ 📂button
 ┃ ┃ ┃ ┃ ┃ ┗ 📜Button.tsx
 ┃ ┃ ┃ ┣ 📜ForgotPass.tsx
 ┃ ┃ ┃ ┣ 📜Select.tsx
 ┃ ┃ ┃ ┣ 📜SelectButton.tsx
 ┃ ┃ ┃ ┣ 📜SignIn.tsx
 ┃ ┃ ┃ ┗ 📜SignUp.tsx
 ┃ ┃ ┣ 📂regularExpression
 ┃ ┃ ┃ ┗ 📜RegularExpression.ts
 ┃ ┃ ┣ 📂template
 ┃ ┃ ┃ ┣ 📜LoginTemplate.tsx
 ┃ ┃ ┃ ┣ 📜LoginTemplateDefaultInfo.tsx
 ┃ ┃ ┃ ┣ 📜MainTemplate.tsx
 ┃ ┃ ┃ ┗ 📜SelectContainer.tsx
 ┃ ┃ ┣ 📜ForgotPass.tsx
 ┃ ┃ ┣ 📜ForgotPassAuthMail.tsx
 ┃ ┃ ┣ 📜Select.tsx
 ┃ ┃ ┣ 📜SelectButton.tsx
 ┃ ┃ ┣ 📜SignIn.tsx
 ┃ ┃ ┣ 📜SignUp.tsx
 ┃ ┃ ┗ 📜SignUpSelect.tsx
 ┃ ┣ 📂matching
 ┃ ┃ ┗ 📂components
 ┃ ┃ ┃ ┣ 📂Dropdown
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜styles.ts
 ┃ ┃ ┃ ┣ 📂MatchingPostItem
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜styles.ts
 ┃ ┃ ┃ ┣ 📂Modal
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜styles.ts
 ┃ ┃ ┃ ┣ 📂Radio
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜styles.ts
 ┃ ┃ ┃ ┣ 📂Sidebar
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜styles.ts
 ┃ ┃ ┃ ┗ 📂Tab
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜styles.ts
 ┃ ┗ 📂mypage
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📂exitButton
 ┃ ┃ ┃ ┃ ┗ 📜Exit.tsx
 ┃ ┃ ┃ ┣ 📂history
 ┃ ┃ ┃ ┃ ┣ 📜History.tsx
 ┃ ┃ ┃ ┃ ┗ 📜HistoryButton.tsx
 ┃ ┃ ┃ ┣ 📂historyInfo
 ┃ ┃ ┃ ┃ ┣ 📜History.tsx
 ┃ ┃ ┃ ┃ ┗ 📜HistoryButton.tsx
 ┃ ┃ ┃ ┣ 📂jellyCheckbox
 ┃ ┃ ┃ ┃ ┗ 📜JellyBox.tsx
 ┃ ┃ ┃ ┣ 📂userInfo
 ┃ ┃ ┃ ┃ ┣ 📜UserInfo.tsx
 ┃ ┃ ┃ ┃ ┣ 📜UserInfoButton.tsx
 ┃ ┃ ┃ ┃ ┗ 📜UserInfoItem.tsx
 ┃ ┃ ┃ ┗ 📂userProfile
 ┃ ┃ ┃ ┃ ┗ 📜UserProfile.tsx
 ┃ ┃ ┣ 📂mobile
 ┃ ┃ ┃ ┣ 📂changePassword
 ┃ ┃ ┃ ┃ ┗ 📜ChangePassword.tsx
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📂accountInfo
 ┃ ┃ ┃ ┃ ┃ ┣ 📜AccountInfo.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜AccountInfoBox.tsx
 ┃ ┃ ┃ ┃ ┣ 📂changePasswordInput
 ┃ ┃ ┃ ┃ ┃ ┗ 📜ChangePasswordInput.tsx
 ┃ ┃ ┃ ┃ ┣ 📂infoText
 ┃ ┃ ┃ ┃ ┃ ┗ 📜InfoText.tsx
 ┃ ┃ ┃ ┃ ┣ 📂mypageText
 ┃ ┃ ┃ ┃ ┃ ┗ 📜MypageText.tsx
 ┃ ┃ ┃ ┃ ┣ 📂requestCode
 ┃ ┃ ┃ ┃ ┃ ┗ 📜RequestCode.tsx
 ┃ ┃ ┃ ┃ ┣ 📂userInfo
 ┃ ┃ ┃ ┃ ┃ ┣ 📜UserInfo.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜UserInfoBox.tsx
 ┃ ┃ ┃ ┃ ┗ 📂userProfile
 ┃ ┃ ┃ ┃ ┃ ┗ 📜UserProfile.tsx
 ┃ ┃ ┃ ┣ 📂mypage
 ┃ ┃ ┃ ┃ ┗ 📜Mypage.tsx
 ┃ ┃ ┃ ┗ 📜MobileMypage.tsx
 ┃ ┃ ┗ 📂template
 ┃ ┃ ┃ ┗ 📂mypageInfo
 ┃ ┃ ┃ ┃ ┗ 📜MypageInfo.tsx
 ┣ 📂fetch
 ┃ ┣ 📂adminUserSearch
 ┃ ┃ ┗ 📜adminUserSearch.ts
 ┃ ┣ 📂forgotPasswordAuthCode
 ┃ ┃ ┗ 📜forgotPasswordAuthCode.ts
 ┃ ┣ 📂forwardingMailAuth
 ┃ ┃ ┗ 📜forwardingMailFetch.ts
 ┃ ┣ 📂getUserInfo
 ┃ ┃ ┗ 📜getUserInfo.ts
 ┃ ┣ 📂history
 ┃ ┃ ┣ 📜deleteHistory.ts
 ┃ ┃ ┣ 📜getHistory.ts
 ┃ ┃ ┗ 📜history.ts
 ┃ ┣ 📂oauthToken
 ┃ ┃ ┗ 📜oauthToken.ts
 ┃ ┣ 📂refreshAccessToken
 ┃ ┃ ┗ 📜refreshAccess.ts
 ┃ ┣ 📂reissureToken
 ┃ ┃ ┗ 📜reissureToken.ts
 ┃ ┣ 📂reportManageMentList
 ┃ ┃ ┗ 📜reportManageMentList.ts
 ┃ ┣ 📂setNewPassword
 ┃ ┃ ┗ 📜newPassword.ts
 ┃ ┣ 📂signIn
 ┃ ┃ ┗ 📜signIn.ts
 ┃ ┗ 📂signUp
 ┃ ┃ ┗ 📜signUp.ts
 ┣ 📂hooks
 ┃ ┣ 📜useAdminSearch.ts
 ┃ ┣ 📜useDebounce.ts
 ┃ ┣ 📜useLoading.ts
 ┃ ┣ 📜useObserver.ts
 ┃ ┗ 📜useOutsideClick.ts
 ┣ 📂provider
 ┃ ┣ 📜CookieProvider.tsx
 ┃ ┣ 📜QueryProvider.tsx
 ┃ ┗ 📜SessionProvider.tsx
 ┣ 📂stores
 ┃ ┣ 📂adminPage
 ┃ ┃ ┗ 📜adminPageStore.ts
 ┃ ┣ 📜.keep
 ┃ ┣ 📜loadingStore.ts
 ┃ ┣ 📜loginStateStore.ts
 ┃ ┗ 📜userStore.ts
 ┗ 📜middleware.ts
</pre>
