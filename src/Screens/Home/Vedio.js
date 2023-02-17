
import {
  View,
  SafeAreaView,
  Text,
  Dimensions,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Share} from 'react-native';
import React, { useState, useEffect } from 'react';
import SingleReel from '../component/SingleReel';
import Video from 'react-native-video';
import { connect } from 'react-redux';
import { userActions, } from '../../_actions';
import { useDispatch } from 'react-redux';


const { width, height } = Dimensions.get('window');
const data = [{ id: 1, vedioUri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', isLike: false, },
{ id: 2, vedioUri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', isLike: false, },
{ id: 3, vedioUri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', isLike: false, },
{ id: 4, vedioUri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', isLike: false, },
{ id: 5, vedioUri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', isLike: false, },
{ id: 6, vedioUri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', isLike: false, },
{ id: 7, vedioUri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4', isLike: false, },
{ id: 8, vedioUri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4', isLike: false, },
{ id: 9, vedioUri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4', isLike: false, },
{ id: 10, vedioUri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4', isLike: false, },
{ id: 11, vedioUri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4', isLike: false, },
{ id: 12, vedioUri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4', isLike: false, },
{ id: 13, vedioUri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4', isLike: false, }];
const Vedio = props => {

const [video, setVideo] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();

  const handleChangeIndexValue = ({ index }) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    // apiFatch();
    dispatch(userActions.getVideoList());

  }, [])
// const apiFatch=()=>{
//   var axios = require('axios');

// var config = {
//   method: 'get',
// maxBodyLength: Infinity,
//   url: 'https://www.comfynews.site/api/v1/getVideoList?type=VIDEO&keyWord=&pageNo=1&size=25',
//   headers: { }
// };

// axios(config)
// .then( (response)=> {
//   console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^",response.data.data.list);
//   setVideo(response.data.data.list)
// })
// .catch(function (error) {
//   console.log(error);
// });

// }

  const { users, navigation } = props;
  let { getVideoListt } = users;
  console.log("getVideoListsgetVideoListsgetVideoLists",getVideoListt);

  const [Mute, setMute] = useState(false);
  const onShare = async () => {
    try {
      const result = await Share.share({
        title: 'App link',
        message: 'Please install this app and stay safe , AppLink :https://play.google.com/store/apps/',
        url: 'https://play.google.com/store/apps/'
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const renderItem = ({ item, index }) => (
    <>
      <View style={{
        width: '100%',
        height: Dimensions.get('window').height,
      }}>

        <Video
          source={{ uri: item.videoUrl }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
          onError={(e) => console.log(e)}
          resizeMode={'stretch'}
          repeat={true}
          paused={false}
          muted={Mute}
        />

        <View style={{
          height: '100%',
          // justifyContent: 'flex-end',
        }}>
          <View style={{
            height: '50%',
            // justifyContent: ''
          }}>
            <View style={{
              // alignSelf: 'flex-start',
              height: 150,
              // justifyContent: 'center',
              marginRight: 5,
              // backgroundColor:'white'
            }}>
              <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Image style={{
                  width: 100,
                  height: 75,

                }} resizeMode={'center'}
                  // source={require('../../assets/img.jpg')}
                  source={require('../../assets/NEWLOGOrm.png')}
                />
                <TouchableOpacity style={{ alignSelf: 'center', marginRight: 14, }}>
                  <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white', backgroundColor: 'rgba(0,0,0,0.3)', padding: 5, borderRadius: 15 }}>View Details</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>

          <View style={{
            height: '35%',
            // justifyContent: 'flex-end'
          }}>
            <View style={{
              alignSelf: 'flex-end',
              height: 150,
              justifyContent: 'space-between',
              marginRight: 5,
              marginTop: 120
            }}>
              <TouchableOpacity style={{ padding: 12, backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 24, }} onPress={() => onShare()}>
                <Image style={{
                  width: 25,
                  height: 25,
                  alignSelf: 'center'

                }}
                  source={require('../../assets/Icons/sharea.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity style={{ padding: 12, backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 24, }} onPress={() => setMute(!Mute)}>
                {Mute ?
                  <Image style={{
                    width: 25,
                    height: 25,
                    alignSelf: 'center'

                  }}
                    source={require('../../assets/Icons/mutea.png')}
                  /> :
                  <Image style={{
                    width: 25,
                    height: 25,
                    alignSelf: 'center'

                  }}
                    source={require('../../assets/Icons/volumea.png')}
                  />
                }
              </TouchableOpacity>

            </View>
          </View>
          <View style={{ height: '20%' }}>
            <Text style={{ margin: 5, fontWeight: 'bold', fontSize: 20, color: 'white' }}> {item.title}</Text>

          </View>


        </View>
      </View>
    </>
  );
  return (

    <View>
      <FlatList
        data={getVideoListt}
        renderItem={({ item, index }) => (
          <SingleReel item={item} index={index} currentIndex={currentIndex} />
        )}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        keyExtractor={(item, index) => index}
      />
    </View>

  )

}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  const { users, } = state;
  return {
    loggingIn,
    users,

  };
}
export default connect(mapStateToProps)(Vedio);








