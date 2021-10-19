import React, {Component} from 'react';

import QResponse from '../models/QResponse';
import {get} from '../services/gateway';
import Data from '../models/store-home';
import {List, Text} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';
import {OverlayCard} from '../shared/OverlayCard';
import {HorizentalCardList} from '../shared/HorizentalCardList/HorizentalCardList';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
export default class HomePageScreen extends Component {
  constructor(props: Component) {
    super(props);

    this.state = {
      bannerLogos: [],
      categories: [],
      offerProducts: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getHomeData();
  }

  async getHomeData() {
    try {
      // get("api/customer/stores/findstores?zipcode=1000&filter_name=rain").then(
      get('357a54c2-5efd-43e2-928a-790c66c8421a').then(
        ({
          data: {offer_products, categories, banner_logos},
        }: QResponse<Data>) => {
          this.setState({
            bannerLogos: banner_logos,
            offerProducts: offer_products.products,
            categories: categories,
            isLoading: false,
          });
          console.log(offer_products, categories, banner_logos);
        },
      );
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({isLoading: false, data: []});
    }
  }
  renderHeader(): any {
    return (
      <Text style={styles.headerTitle} appearance="hint">
        Hot Offers
      </Text>
    );
  }
  render() {
    const {
      bannerLogos = [],
      offerProducts = [],
      categories,
      isLoading,
    } = this.state as any;

    return (
      <React.Fragment>
        <ScrollView>
          <Text style={styles.headerTitle} appearance="hint" category="s2">
            Hot Deals
          </Text>
          <List
            contentContainerStyle={styles.horizontalList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={bannerLogos}
            renderItem={HorizentalCardList}
          />

          <Text style={styles.headerTitle} appearance="hint">
            Hot Offers
          </Text>
          <List
            contentContainerStyle={styles.horizontalList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={offerProducts}
            renderItem={HorizentalCardList}
          />

          <Text style={styles.headerTitle} appearance="hint">
            Categories
          </Text>
          <List
            contentContainerStyle={styles.horizontalList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categories}
            renderItem={HorizentalCardList}
          />
        </ScrollView>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'scroll',
  },
  text: {
    textAlign: 'center',
  },
  likeButton: {
    marginVertical: 16,
  },
  headerTitle: {
    padding: 16,
    backgroundColor: '#edf0f9',
    fontWeight: 'bold',
    fontSize: 18,
  },
  horizontalList: {
    marginVertical: 16,
    paddingHorizontal: 8,
  },
  verticalItem: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  horizontalItem: {
    width: 256,
    marginHorizontal: 8,
    height: 300,
  },
  tab: {
    height: 192,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
