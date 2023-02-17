
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CONST } from '../../_config';
// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  Image,
  Touchable,
  search
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {


      search: '',
      newFeedListData: [],
      filteredDataSource: [],
      masterDataSource: [],
    }
  }

  componentDidMount() {
    this.getAllCategory();
  }
  getAllCategory = () => {
    // let header = new Headers({
    //   'Content-Type': 'application/json',
    // });
    // const requestOptions = {
    //   method: "POST",
    //   headers: header,
    // }
    // // https://www.powerofonenews.com/api/v1/getFeaturePostNewsList
    // return fetch(CONST.BACKEND_URL + `/getFeaturePostNewsList`, requestOptions)
    //   .then((response) => response.json())
    //   .then(response => {
    //     this.setState({ masterDataSource: response.data.list });
    //     console.log("????????????????????????????????????????????/", response.data);
    //   });
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'https://www.comfynews.site/api/v1/getFeaturePostNewsList',
      headers: {}
    };

    axios(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        this.setState({ masterDataSource: response.data.data.featurePost });
        // console.log("????????????????????????????????????????????/", response.data.data.featurePost);
      })
      .catch((error) => {
        console.log(error);
      });
  }




  searchFilterFunction = (text) => {

    if (text) {

      const newData = this.state.masterDataSource.filter(
        function (item) {
          const itemData = item.title
            ? item.title.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
      this.setState({ filteredDataSource: newData });
      // setFilteredDataSource(newData);
      this.setState({ search: text });
      // setSearch(text);
    }
    else {

      // Update FilteredDataSource with masterDataSource
      // setFilteredDataSource(masterDataSource);
      this.setState({ filteredDataSource: this.state.masterDataSource });
      this.setState({ search: text });


    }
  };

  ItemView = ({ item }) => {
    return (
      <>



        <TouchableOpacity onPress={() => this.props.navigation.navigate('CricketNewsDetail', { id: item.id })}>

          <View style={{ flexDirection: 'row', marginRight: 10, marginLeft: 10 }}>
            <View>
              <Image source={{ uri: item.imageLinkUrl }} style={{ height: 50, width: 50, resizeMode: 'contain' }} />

            </View>
            <View>

              <Text numberOfLines={2}
                style={styles.itemStyle}
                onPress={() => this.getItem(item)}>
                {/* {item.id}
            {'.'} */}
                {item.title.toUpperCase()}
              </Text>
            </View>


          </View>
        </TouchableOpacity>



        {/* // <View>
      //
      // </View> */}
      </>
    );
  };

  ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  getItem = (item) => {
    // Function for click on an item
    // alert('Id : ' + item.id + ' title : ' + item.title);
  };


  render() {
    let { users, font } = this.props;
    const { masterDataSource, filteredDataSource } = this.state;
    // let { HomePageCategories, } = users;


    // // console.log("filteredDataSourcefilteredDataSourcefilteredDataSourcefilteredDataSourcefilteredDataSource", filteredDataSource);

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => this.searchFilterFunction(text)}
            value={this.search}
            underlineColorAndroid="transparent"
            placeholder="Search Here"
          />
          <FlatList
            data={this.state.filteredDataSource}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={this.ItemSeparatorView}
            renderItem={this.ItemView}
          />
        </View>

      </SafeAreaView>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: 'gray',
    backgroundColor: '#e2e8f0',
    borderRadius: 10,

  },
});


function mapStateToProps(state) {

  const { loggingIn } = state.authentication;
  const { users, dashboard, theme, font } = state;
  return {
    loggingIn,
    users,
    dashboard, theme, font
  };
}
export default connect(mapStateToProps)(App);

// 
// import React, { useEffect, useState } from 'react';
// import { Text, View, Pressable, TextInput, FlatList, Image } from 'react-native';
// // import dummyContacts from '../../data/contacts.json';
// import AntDesign from 'react-native-vector-icons/AntDesign'


// const Search = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredContacts, setFilteredContacts] = useState(dummyContacts);



//   useEffect(() => {
//     const newContacts = dummyContacts.filter(contact =>
//       contact.user_display_name
//         .toLowerCase()
//         .includes(searchTerm.toLowerCase()),
//     );
//     setFilteredContacts(newContacts);
//   }, [searchTerm]);

//   return (
//     <View style={{ flex: 1, backgroundColor: 'white', padding: 15 }}>
//       <View>
//         <TextInput
//           value={searchTerm}
//           onChangeText={setSearchTerm}
//           style={{ backgroundColor: '#f0f0f0', padding: 10, borderRadius: 5, color: "black", paddingLeft: 40 }}
//           placeholder="विषय, शहर या राज्य खोजें"
//           placeholderTextColor={'black'}
//         />
//         <AntDesign style={{position:'absolute',top:15,left:10}} name="search1" size={18} color="black" />
//       </View>
//       <FlatList
//         data={filteredContacts}
//         renderItem={({ item }) => (
//           <Pressable>
//             <Text style={{ fontSize: 16, marginVertical: 10, color: 'black' }}>{item.user_display_name}</Text>
//           </Pressable>
//         )}
//         ItemSeparatorComponent={() => <View style={{ width: '100%', height: 1, backgroundColor: '#f0f0f0' }} />}
//       />
//     </View>
//   );
// };

// export default Search;

