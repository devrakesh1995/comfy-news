import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { userActions } from '../../_actions';
import { userActions } from '../../_actions';
import {
View, Text, Dimensions, TouchableOpacity,
Image, ImageBackground, TextInput, KeyboardAvoidingView, Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollPager } from 'react-native-tab-view';
import { ScrollView } from 'react-native-gesture-handler';

const { height, width } = Dimensions.get('window')

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      otp: '1234',
      showLogin: true,
      failureMSG: '',
      failureOTPMSG: '',
      username: '',
      Phone: '',
      confirmpasssword: '',
      fieldslogin: {},
      errorslogin: {},
    }
  }
  static getDerivedStateFromProps(nextProps, prevState) {


    if (nextProps.users.UserLoginEmailSuccess) {
      console.log("nextProps.users.UserLoginFailurenextProps.users.UserLoginFailurenextProps.users.UserLoginFailure",nextProps.users.UserLoginFailure);
      return {
        ...nextProps,
        showLogin: false
      }
    }
    if (nextProps.users.UserLoginFailure) {
      return {
        ...nextProps,
        failureMSG: 'Please enter valid username!'
      }
    }
    if (nextProps.users.UserLoginOTPFailure) {
      return {
        ...nextProps,
        failureOTPMSG: 'Invalid OTP or expired!'
      }
    }

    else {
      return {
        ...nextProps
      }
    }
    
  }
  async componentDidMount(nextProps) {
    // await AsyncStorage.removeItem('UserData');
  }
  handleLoginInput = (text) => {
    this.setState({ email: text })
  }
  handleLoginInputPassword = (text) => {
    this.setState({ password: text })

    console.log("************************",nextProps);
  }


  submitLogin = () => {
    // let data = {
    //   email: this.state.email,
    //   password: this.state.password,
    // }
    // console.log("data is :");
    if (this.handleValidationLogin()) {
      let data = {
        name: this.state.fieldslogin.username,
        email: this.state.fieldslogin.email,
        mobNo: this.state.fieldslogin.mobNo,
        password: this.state.fieldslogin.password,
        confirmPassword: this.state.fieldslogin.confirmpassword,
        // refByCode: this.state.fieldslogin.refByCode ? this.state.fieldslogin.refByCode : "",
      }
      // this.setState({otpSentRegister:true}),
      // console.log("datadatadatadatadatadatadatadatadatadatadata", data);
      // this.props.dispatch(userActions.register(data, this.props));
      this.props.dispatch(userActions.userlogin(data, this.props));
    }
    // this.props.dispatch(userActions.register(data, this.props));
  }


  onSubmitOTP = () => {
    const { users } = this.props;
    const { UserEmailToken } = users;

    // console.log("user data:::::", UserEmailToken);
    if (this.state.otp !== 'NaN') {
      let data = {
        token: UserEmailToken,
        otp: this.state.otp
      }
      this.props.dispatch(userActions.otpSumbit(data, this.props));
    }
  }

  handleVerificationInput = (text) => {
    this.setState({ otp: text })
  }
  gotoIntroScreen = (router) => {
    this.props.navigation.navigate(router)
  }

  inputChange(value, name) {
    // this.setState({ [name]: value });
    let { fieldslogin, errorslogin } = this.state;
    fieldslogin[name] = value;
    errorslogin[name] = "";
    // console.log(name, value);
    this.setState({ fieldslogin, errorslogin });
  }
  handleValidationLogin = () => {
    let fieldslogin = this.state.fieldslogin;
    let errorslogin = {};
    let formIsValid = true;

    //Name
    if (!fieldslogin["username"]) {
      formIsValid = false;
      errorslogin["username"] = "Please enter name!";
    }

    //Email
    if (!fieldslogin["email"] || fieldslogin["email"] === "") {
      formIsValid = false;
      errorslogin["email"] = "Cannot be empty";
    }

    if (typeof fieldslogin["email"] !== "undefined" && fieldslogin["email"] !== "") {
      let lastAtPos = fieldslogin["email"].lastIndexOf('@');
      let lastDotPos = fieldslogin["email"].lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fieldslogin["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fieldslogin["email"].length - lastDotPos) > 2)) {
        formIsValid = false;
        errorslogin["email"] = "Enter valid email!";
      }
    }
    //mobNo no
    if (!fieldslogin["mobNo"]) {
      formIsValid = false;
      errorslogin["mobNo"] = "Please Enter mobile no";
    }

    if (typeof fieldslogin["mobNo"] !== "undefined" && fieldslogin["mobNo"] !== "") {
      let lenghtof = fieldslogin["mobNo"].length;
      if (lenghtof <= 9) {
        formIsValid: false;
        errorslogin["mobNo"] = "Enter valid phone no";

      }
    }

    //Password
    if (!fieldslogin["password"]) {
      formIsValid = false;
      errorslogin["password"] = "Please enter password!";
    }

    if (!fieldslogin["confirmpassword"]) {
      formIsValid = false;
      errorslogin["confirmpassword"] = "Please enter confirmpassword!";
    }

    if (!fieldslogin["password"] === fieldslogin["confirmpassword"]) {
      formIsValid = false;
      errorslogin["confirmpassword"] = "Password Is Not Matching!";

    }

    this.setState({ errorslogin: errorslogin });
    return formIsValid;
  }

  render() {
    let { email, password, failureMSG, username, Phone, confirmpasssword, fieldslogin, errorslogin } = this.state;
    let { users, theme, font } = this.props;
    return (
      <SafeAreaView>

        <View style={{ height: height, backgroundColor: '#F5F2EA', borderWidth: 2, borderColor: '#0A142F' }}>
          <ScrollView>

            {/* <View style={{ height: height, borderWidth: 2, borderColor: '#0A142F' }} > */}
            {/* <View>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                {theme && theme.theme === "dark" ?
                  <Image source={require('../../images/back.png')} style={{ height: 28, width: 28, marginLeft: 10 }} />
                  :
                  <Image source={require('../../images/backarrow.png')} style={{ height: 28, width: 28, marginLeft: 10 }} />
                }
              </TouchableOpacity>
            </View> */}
            <View style={{
              alignItems: 'center', marginTop: 20, marginBottom: 20,

              //  marginTop: height / 2 - 310,
              alignSelf: 'center'
            }}>

              {this.state.showLogin ?
                <>
                  <View style={{ justifyContent: 'space-between', paddingBottom: 10 }}>
                    <View style={{ backgroundColor: 'white', width: width - 35, borderRadius: 18, elevation: 8, borderWidth: 1, borderColor: '#FFF' }}>
                      <View style={{ borderRadius: 15, borderWidth: 1, borderColor: '#FFF' }}>

                        <View style={{ marginTop: 15, height: 150, width: width, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingRight: 35 }}>
                          <Image style={{ height: 60, width: 110,top:45,resizeMode:'contain' }} source={require('../../assets/Comfygenlogo.png')} resizeMode={'stretch'} />
                          {/* <Text style={{ fontSize: 23, textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 1, textShadowColor: 'lightgray', fontWeight: '500' }}> DAIKICOIN
                          </Text> */}
                        </View>
                        <Text style={{ fontSize: 27, fontWeight: 'bold', textAlign: 'center', paddingTop: 15 }}> Sign up</Text>

                        {/* User Name */}
                        <Text style={{ fontSize: 15, paddingTop: 15, color: 'gray', paddingLeft: 17 }}>User Name</Text>
                        <View style={{ marginHorizontal: 15, height: 45, backgroundColor: '#E4E7F2', borderRadius: 10 }}>
                          <TextInput
                            style={{ marginHorizontal: 10, fontSize: 15 }}
                            placeholder="Enter Username"
                            fontSize={14}
                            name="username"
                            onChangeText={(text) => this.inputChange(text, "username")}
                            value={fieldslogin && fieldslogin["username"] ? fieldslogin["username"] : ''}
                          />
                        </View>
                        {errorslogin && errorslogin["username"] ? <Text style={{ color: 'red', marginLeft: 10 }}>{errorslogin["username"]}</Text> : null}

                        {/* Email */}

                        <Text style={{ fontSize: 15, paddingTop: 15, color: 'gray', paddingLeft: 17 }}>Email</Text>
                        <View style={{ marginHorizontal: 15, height: 45, backgroundColor: '#E4E7F2', borderRadius: 10 }}>
                          <TextInput
                            style={{ marginHorizontal: 10, fontSize: 15 }}
                            placeholder="Example@gmail.com"
                            fontSize={14}
                            name="email"
                            onChangeText={(text) => this.inputChange(text, "email")}
                            value={fieldslogin && fieldslogin["email"] ? fieldslogin["email"] : ''}
                          />
                        </View>
                        {errorslogin && errorslogin["email"] ? <Text style={{ color: 'red', marginLeft: 10 }}>{errorslogin["email"]}</Text> : null}



                        {/*   Phone Number  */}
                        <Text style={{ fontSize: 15, paddingTop: 15, color: 'gray', paddingLeft: 17 }}>Phone Number</Text>
                        <View style={{ marginHorizontal: 15, height: 45, backgroundColor: '#E4E7F2', borderRadius: 10 }}>
                          <TextInput
                            style={{ marginHorizontal: 10, fontSize: 15 }}
                            placeholder="Enter Phone Number"
                            fontSize={14}
                            name="mobNo"
                            onChangeText={(text) => this.inputChange(text, "mobNo")}
                            value={fieldslogin && fieldslogin["mobNo"] ? fieldslogin["mobNo"] : ''}
                          />
                        </View>
                        {errorslogin && errorslogin["mobNo"] ? <Text style={{ color: 'red', marginLeft: 10 }}>{errorslogin["mobNo"]}</Text> : null}

                        {/* Password  */}
                        <Text style={{ fontSize: 15, paddingTop: 15, color: 'gray', paddingLeft: 17 }}>Password</Text>
                        <View style={{ marginHorizontal: 15, height: 45, backgroundColor: '#E4E7F2', borderRadius: 10 }}>
                          <TextInput
                            style={{ marginHorizontal: 10, fontSize: 15 }}
                            placeholder="Password"
                            fontSize={14}
                            name="password"
                            secureTextEntry={true}
                            onChangeText={(text) => this.inputChange(text, "password")}
                            value={fieldslogin && fieldslogin["password"] ? fieldslogin["password"] : ''}
                          />
                        </View>
                        {errorslogin && errorslogin["password"] ? <Text style={{ color: 'red', marginLeft: 10 }}>{errorslogin["password"]}</Text> : null}


                        {/* confirm password */}
                        <Text style={{ fontSize: 15, paddingTop: 15, color: 'gray', paddingLeft: 17 }}> Confirm Password</Text>
                        <View style={{ marginHorizontal: 15, height: 45, backgroundColor: '#E4E7F2', borderRadius: 10 }}>
                          <TextInput
                            style={{ marginHorizontal: 10, fontSize: 15 }}
                            placeholder="Confirm  Password"
                            fontSize={14}
                            name="confirmpassword"
                            secureTextEntry={true}
                            onChangeText={(text) => this.inputChange(text, "confirmpassword")}
                            value={fieldslogin && fieldslogin["confirmpassword"] ? fieldslogin["confirmpassword"] : ''} />
                        </View>
                        {errorslogin && errorslogin["confirmpassword"] ? <Text style={{ color: 'red', marginLeft: 10 }}>{errorslogin["confirmpassword"]}</Text> : null}


                        <View style={{ borderWidth: 1, borderColor: '#131313', borderRadius: 11, marginHorizontal: 20, marginBottom: 25, marginTop: 40, elevation: 8 }}>
                          <View style={{ backgroundColor: '#0A142F', height: 40, borderRadius: 10, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#0A142F' }}>

                            <TouchableOpacity style={{ width: '100%' }}
                              onPress={() => this.submitLogin()}>
                              <Text style={{ fontSize: 19, color: 'white', textAlign: 'center', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 1, textShadowColor: 'lightgray' }}> Sign Up </Text>

                            </TouchableOpacity>
                          </View>
                        </View>

                        <View style={{ height: 35, flexDirection: 'row', justifyContent: 'center', marginBottom: 20, }}>
                          <Text style={{ fontSize: 15, textAlign: 'center', color: '#000', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 1, textShadowColor: 'lightgray' }}> Already have an Account? </Text>
                         <TouchableOpacity onPress={() => this.gotoIntroScreen('Login')}>
                          <Text style={{ fontSize: 15, textAlign: 'center', color: '#2390FB', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 1, textShadowColor: 'lightgray' }}> Sign In </Text>
                       </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                </>
                :
                <>
                  <Image style={{ height: 70, width: 200, }} source={require('../../assets/dbLogo.png')} resizeMode={'stretch'} />
                  <View style={{ backgroundColor: 'white', width: width - 35, borderRadius: 18, elevation: 8, borderWidth: 1, borderColor: '#FFF', alignSelf: 'center', marginTop: 100, paddingVertical: 20 }}>
                    <Text style={{ padding: 19, fontSize: 22, fontWeight: 'bold', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 1, textShadowColor: 'lightgray' }}>Verification</Text>

                    <TextInput
                      placeholder='Enter Otp'
                      style={{
                        height: 40,

                        alignSelf: 'center',
                        width: '80%',
                        borderColor: 'black',
                        borderWidth: 0.5, borderRadius: 10, fontSize: 15, fontWeight: 'bold'

                      }}
                      name="otp"
                      // onChangeText={(text) => this.handleVerificationInput(text)}
                      value={this.state.otp}
                    />

                    <TouchableOpacity onPress={() => this.onSubmitOTP()}>
                      <View
                        style={{
                          width: 220,
                          height: 50,
                          backgroundColor: '#3498eb',
                          borderRadius: 50,
                          marginTop: 25,
                          alignSelf: 'center', elevation: 8

                        }}

                      >
                        <Text style={{
                          marginTop: 13,
                          textAlign: 'center',
                          color: '#fff',
                          fontWeight: 'bold',
                          fontSize: 15, textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 1, textShadowColor: 'lightgray'

                        }}>VERIFY AND PROCEED</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </>
                }
            </View>
            {/* </View> */}
            <View style={{ height: 200 }}></View>
          </ScrollView>

        </View>
      </SafeAreaView>
      


    )
  }
}
function mapStateToProps(state) {

  const { loggingIn } = state.authentication;
  const { users, dashboard, theme, font } = state;
  return {
    loggingIn,
    users,
    dashboard,
    theme, font
  };
}
export default connect(mapStateToProps)(Register);