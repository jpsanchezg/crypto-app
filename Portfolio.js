/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native';


export default function Portfolio(props) {
  return (
    <View style={[styles.group, styles.group_layout]}>
      <View style={[styles.flex, styles.flex_layout13]}>
        <View style={styles.flex_row}>
          <View style={[styles.coinroutes_box, styles.coinroutes_box_layout]}>
            <Text style={styles.coinroutes} ellipsizeMode={'clip'}>
              {'coinroutes'}
            </Text>
          </View>
        </View>
        <View style={styles.flex_row}>
          <View style={[styles.flex1, styles.flex1_layout]}>
            <View style={styles.flex1_col}>
              <View style={[styles.portfolio_box, styles.portfolio_box_layout]}>
                <Text style={styles.portfolio} ellipsizeMode={'clip'}>
                  {'portfolio'}
                </Text>
              </View>
            </View>
            <View style={styles.flex1_space} />
            <View style={styles.flex1_col1}>
              <View style={[styles.group1, styles.group1_layout]}>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.flex_row}>
          <View style={[styles.flex2, styles.flex2_layout]}>
            <View style={styles.flex2_col}>
              <View style={[styles.flex, styles.flex_layout]}>
                <View style={styles.flex3_row}>
                  <View
                    style={[
                      styles.hero_title_wrap,
                      styles.hero_title_wrap_layout
                    ]}>
                    <View
                      style={[
                        styles.total_holdings_box,
                        styles.total_holdings_box_layout
                      ]}>
                      <Text
                        style={styles.total_holdings}
                        ellipsizeMode={'clip'}>
                        {'Total holdings'}
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.hero_title_box,
                        styles.hero_title_box_layout
                      ]}>
                      <Text style={styles.hero_title} ellipsizeMode={'clip'}>
                        {'$325,800'}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.flex3_row}>
                  <View
                    style={[
                      styles.hero_title_wrap,
                      styles.hero_title_wrap_layout1
                    ]}>
                    <View
                      style={[
                        styles.total_balance_box,
                        styles.total_balance_box_layout
                      ]}>
                      <Text style={styles.total_balance} ellipsizeMode={'clip'}>
                        {'Total Balance'}
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.hero_title_box,
                        styles.hero_title_box_layout1
                      ]}>
                      <Text style={styles.hero_title} ellipsizeMode={'clip'}>
                        {'$25,800'}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.flex2_space} />
            <View style={styles.flex2_col1}>
              <View style={[styles.group2, styles.group2_layout]}>
                <View
                  style={[
                    styles.hero_title_wrap,
                    styles.hero_title_wrap_layout2
                  ]}>
                  <View
                    style={[styles.on_orders_box, styles.on_orders_box_layout]}>
                    <Text style={styles.on_orders} ellipsizeMode={'clip'}>
                      {'On orders'}
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.hero_title_box2,
                      styles.hero_title_box2_layout
                    ]}>
                    <Text style={styles.hero_title2} ellipsizeMode={'clip'}>
                      {'$35,800'}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.flex_row}>
          <View style={[styles.wallets_box, styles.wallets_box_layout]}>
            <Text style={styles.wallets} ellipsizeMode={'clip'}>
              {'Wallets'}
            </Text>
          </View>
        </View>
        <View style={styles.flex_row}>
          <View style={[styles.flex, styles.flex_layout8]}>
            <View style={styles.flex4_row}>
              <View style={[styles.flex, styles.flex_layout]}>
                <View style={styles.flex5_row}>
                  <View style={[styles.flex6, styles.flex6_layout]}>
                    <View style={styles.flex6_col}>
                      <View style={[styles.flex7, styles.flex7_layout]}>
                        <View style={styles.flex7_col}>
                          <View style={[styles.group3, styles.group3_layout]}>
                            <View
                              style={[styles.group4, styles.group4_layout]}
                            />

                            <ImageBackground
                              style={[
                                styles.cover_group,
                                styles.cover_group_layout
                              ]}
                              source={require('./assets/1538bfc59054c192029de631ee0e76c3.png')}
                              resizeMode="contain">
                              <ImageBackground
                                style={[styles.img, styles.img_layout]}
                                source={require('./assets/47ccf1fd903048056ab6db9b8a09812b.png')}
                              />
                            </ImageBackground>
                          </View>
                        </View>
                        <View style={styles.flex7_space} />
                        <View style={styles.flex7_col1}>
                          <View style={[styles.flex, styles.flex_layout1]}>
                            <View style={styles.flex8_row}>
                              <View
                                style={[
                                  styles.bitcoin_box,
                                  styles.bitcoin_box_layout
                                ]}>
                                <Text
                                  style={styles.bitcoin}
                                  ellipsizeMode={'clip'}>
                                  {'Bitcoin'}
                                </Text>
                              </View>
                            </View>
                            <View style={styles.flex8_row}>
                              <View
                                style={[
                                  styles.small_text_body_box,
                                  styles.small_text_body_box_layout
                                ]}>
                                <Text
                                  style={styles.small_text_body}
                                  ellipsizeMode={'clip'}>
                                  {'87.29%'}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.flex6_space} />
                    <View style={styles.flex6_col1}>
                      <View style={[styles.flex, styles.flex_layout2]}>
                        <View style={styles.flex9_row}>
                          <View
                            style={[
                              styles.small_text_body_box1,
                              styles.small_text_body_box1_layout
                            ]}>
                            <Text
                              style={styles.small_text_body1}
                              ellipsizeMode={'clip'}>
                              {'3.876 BTC'}
                            </Text>
                          </View>
                        </View>
                        <View style={styles.flex9_row}>
                          <View
                            style={[
                              styles.small_text_body_box,
                              styles.small_text_body_box_layout1
                            ]}>
                            <Text
                              style={styles.small_text_body2}
                              ellipsizeMode={'clip'}>
                              {'$30,789.98'}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.flex6_col2}>
                      <ImageBackground
                        style={[styles.img, styles.img_layout1]}
                        source={require('./assets/96c82393c105b5a6317ca8a5bdf38cca.png')}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.flex5_row}>
                  <View style={[styles.flex10, styles.flex10_layout]}>
                    <View style={styles.flex10_col}>
                      <View style={[styles.flex11, styles.flex11_layout]}>
                        <View style={styles.flex11_col}>
                          <View style={[styles.group5, styles.group5_layout]}>
                            <View
                              style={[styles.group6, styles.group6_layout]}
                            />
                            <ImageBackground
                              style={[styles.icon, styles.icon_layout]}
                              source={require('./assets/90306fc3a9bc679aea03f2fcffd8d47e.png')}
                            />
                          </View>
                        </View>
                        <View style={styles.flex11_space} />
                        <View style={styles.flex11_col1}>
                          <View style={[styles.flex, styles.flex_layout3]}>
                            <View style={styles.flex12_row}>
                              <View
                                style={[
                                  styles.ethereum_box,
                                  styles.ethereum_box_layout
                                ]}>
                                <Text
                                  style={styles.ethereum}
                                  ellipsizeMode={'clip'}>
                                  {'Ethereum'}
                                </Text>
                              </View>
                            </View>
                            <View style={styles.flex12_row}>
                              <View
                                style={[
                                  styles.small_text_body_box,
                                  styles.small_text_body_box_layout2
                                ]}>
                                <Text
                                  style={styles.small_text_body3}
                                  ellipsizeMode={'clip'}>
                                  {'7.71%'}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.flex10_space} />
                    <View style={styles.flex10_col1}>
                      <View style={[styles.flex, styles.flex_layout4]}>
                        <View style={styles.flex13_row}>
                          <View
                            style={[
                              styles.small_text_body_box4,
                              styles.small_text_body_box4_layout
                            ]}>
                            <Text
                              style={styles.small_text_body4}
                              ellipsizeMode={'clip'}>
                              {'1.476 ETH'}
                            </Text>
                          </View>
                        </View>
                        <View style={styles.flex13_row}>
                          <View
                            style={[
                              styles.small_text_body_box,
                              styles.small_text_body_box_layout3
                            ]}>
                            <Text
                              style={styles.small_text_body5}
                              ellipsizeMode={'clip'}>
                              {'$13,789.98'}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.flex10_col2}>
                      <ImageBackground
                        style={[styles.img, styles.img_layout2]}
                        source={require('./assets/96c82393c105b5a6317ca8a5bdf38cca.png')}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.flex5_row}>
                  <View style={[styles.flex14, styles.flex14_layout]}>
                    <View style={styles.flex14_col}>
                      <View style={[styles.flex15, styles.flex15_layout]}>
                        <View style={styles.flex15_col}>
                          <View style={[styles.group7, styles.group7_layout]}>
                            <View
                              style={[styles.group8, styles.group8_layout]}
                            />

                            <ImageBackground
                              style={[
                                styles.cover_group,
                                styles.cover_group_layout
                              ]}
                              source={require('./assets/d1dd35208294f1bf071d51d45a65cffe.png')}
                              resizeMode="contain">
                              <ImageBackground
                                style={[styles.img, styles.img_layout3]}
                                source={require('./assets/77618e0da908efe9c4c403e736af8fc6.png')}
                              />
                            </ImageBackground>
                          </View>
                        </View>
                        <View style={styles.flex15_space} />
                        <View style={styles.flex15_col1}>
                          <View style={[styles.flex, styles.flex_layout5]}>
                            <View style={styles.flex16_row}>
                              <View
                                style={[
                                  styles.hedara_box,
                                  styles.hedara_box_layout
                                ]}>
                                <Text
                                  style={styles.hedara}
                                  ellipsizeMode={'clip'}>
                                  {'Hedara'}
                                </Text>
                              </View>
                            </View>
                            <View style={styles.flex16_row}>
                              <View
                                style={[
                                  styles.small_text_body_box,
                                  styles.small_text_body_box_layout4
                                ]}>
                                <Text
                                  style={styles.small_text_body6}
                                  ellipsizeMode={'clip'}>
                                  {'5%'}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.flex14_space} />
                    <View style={styles.flex14_col1}>
                      <View style={[styles.flex, styles.flex_layout6]}>
                        <View style={styles.flex17_row}>
                          <View
                            style={[
                              styles.small_text_body_box,
                              styles.small_text_body_box_layout5
                            ]}>
                            <Text
                              style={styles.small_text_body7}
                              ellipsizeMode={'clip'}>
                              {'1.476 HBAR'}
                            </Text>
                          </View>
                        </View>
                        <View style={styles.flex17_row}>
                          <View
                            style={[
                              styles.small_text_body_box,
                              styles.small_text_body_box_layout6
                            ]}>
                            <Text
                              style={styles.small_text_body8}
                              ellipsizeMode={'clip'}>
                              {'$8,789.98'}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.flex14_col2}>
                      <ImageBackground
                        style={[styles.img, styles.img_layout4]}
                        source={require('./assets/96c82393c105b5a6317ca8a5bdf38cca.png')}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.flex_row}>
          <View style={[styles.group9, styles.group9_layout]}>
            <View style={[styles.flex18, styles.flex18_layout]}>
              <View style={styles.flex18_col}>
                <View style={[styles.flex, styles.flex_layout9]}>
                  <View style={styles.flex19_row}>
                    <View style={[styles.flex20, styles.flex20_layout]}>
                      <View style={styles.flex20_col}>
                        <ImageBackground
                          style={[styles.img, styles.img_layout5]}
                          source={require('./assets/963e53cdb8680ab5e0cfb94c6ff17c01.png')}
                        />
                      </View>
                      <View style={styles.flex20_col}>
                        <ImageBackground
                          style={[styles.img, styles.img_layout6]}
                          source={require('./assets/717fdbd8c7c46e68e3a839ca9f6943e1.png')}
                        />
                      </View>
                      <View style={styles.flex20_col}>
                        <ImageBackground
                          style={[styles.img, styles.img_layout7]}
                          source={require('./assets/fcad7a34dc72874841fe2d9be4a39155.png')}
                        />
                      </View>
                      <View style={styles.flex20_col}>
                        <ImageBackground
                          style={[styles.img, styles.img_layout8]}
                          source={require('./assets/9b7e6fc3373edf78e5701c65c98eb939.png')}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.flex19_row}>
                    <View style={[styles.market_box, styles.market_box_layout]}>
                      <Text style={styles.market} ellipsizeMode={'clip'}>
                        {'Market'}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.flex18_space} />
              <View style={styles.flex18_col1}>
                <View style={[styles.flex, styles.flex_layout10]}>
                  <View style={styles.flex21_row}>
                    <ImageBackground
                      style={[styles.icon, styles.icon_layout1]}
                      source={require('./assets/ebd405fa5cec096fb18462366f2778bb.png')}
                    />
                  </View>
                  <View style={styles.flex21_row}>
                    <View style={[styles.search_box, styles.search_box_layout]}>
                      <Text style={styles.search} ellipsizeMode={'clip'}>
                        {'Search'}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.flex18_space1} />
              <View style={styles.flex18_col2}>
                <View style={[styles.flex, styles.flex_layout11]}>
                  <View style={styles.flex22_row}>
                    <ImageBackground
                      style={[styles.icon, styles.icon_layout2]}
                      source={require('./assets/a93dd01ea6a5e33e5a495ece5f0f91df.png')}
                    />
                  </View>
                  <View style={styles.flex22_row}>
                    <View
                      style={[
                        styles.portfolio_box1,
                        styles.portfolio_box1_layout
                      ]}>
                      <Text style={styles.portfolio1} ellipsizeMode={'clip'}>
                        {'Portfolio'}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.flex18_space2} />
              <View style={styles.flex18_col3}>
                <View style={[styles.flex, styles.flex_layout12]}>
                  <View style={styles.flex23_row}>
                    <ImageBackground
                      style={[styles.icon, styles.icon_layout3]}
                      source={require('./assets/abd88c24de7500ae02ebd024dadd8580.png')}
                    />
                  </View>
                  <View style={styles.flex23_row}>
                    <View
                      style={[styles.settings_box, styles.settings_box_layout]}>
                      <Text style={styles.settings} ellipsizeMode={'clip'}>
                        {'Settings'}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

Portfolio.inStorybook = true;
Portfolio.fitScreen = false;
Portfolio.scrollHeight = 896;

const styles = StyleSheet.create({
  group: {
    width: '100%',
    backgroundColor: '#1a1d2cff'
  },
  group_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    minHeight: 896,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex: {},
  flex_layout13: {
    overflow: 'visible',
    marginTop: 60,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex_row: {
    flexGrow: 0,
    flexShrink: 1
  },
  coinroutes_box_layout: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 16,
    flexGrow: 1,
    marginRight: 16
  },
  coinroutes_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  flex1: {
    flexDirection: 'row'
  },
  flex1_layout: {
    overflow: 'visible',
    marginTop: 30,
    marginBottom: 0,
    marginLeft: 11,
    flexGrow: 1,
    marginRight: 11
  },
  flex1_col: {
    flexGrow: 1,
    flexShrink: 1,
    minWidth: 136
  },
  portfolio_box_layout: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  portfolio_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  flex1_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 109
  },
  flex1_col1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 136
  },
  group1: {
    width: '100%',
    backgroundColor: '#3d943aff',
    borderRadius: 13.5
  },
  group1_layout: {
    overflow: 'visible',
    marginTop: 0,
    height: 27,
    marginBottom: 1,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  deposit: {
    color: '#ffffffff',
    textAlign: 'right',
    letterSpacing: 0,
    lineHeight: 17.663997650146484,
    fontSize: 20,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  deposit_box: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  flex2: {
    flexDirection: 'row'
  },
  flex2_layout: {
    overflow: 'visible',
    marginTop: 32,
    marginBottom: 0,
    marginLeft: 16,
    flexGrow: 1,
    marginRight: 16
  },
  flex2_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 143
  },
  flex_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex3_row: {
    flexGrow: 0,
    flexShrink: 1
  },
  hero_title_wrap: {
    width: '100%'
  },
  hero_title_wrap_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    minHeight: 68,
    marginLeft: 3,
    flexGrow: 1,
    marginRight: 0
  },
  total_holdings_box_layout: {
    position: 'absolute',
    top: 0,
    bottom: 39,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  total_holdings_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  hero_title_box_layout: {
    marginTop: 25,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  hero_title_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  hero_title_wrap_layout1: {
    overflow: 'visible',
    marginTop: 32,
    marginBottom: 0,
    minHeight: 68,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 11
  },
  total_balance_box_layout: {
    position: 'absolute',
    top: 0,
    bottom: 39,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  total_balance_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  hero_title_box_layout1: {
    marginTop: 25,
    marginBottom: 0,
    marginLeft: 3,
    flexGrow: 1,
    marginRight: 3
  },
  flex2_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 55
  },
  flex2_col1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 120
  },
  group2: {
    width: '100%'
  },
  group2_layout: {
    overflow: 'visible',
    marginTop: 100,
    marginBottom: 0,
    minHeight: 68,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  hero_title_wrap_layout2: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    minHeight: 68,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  on_orders_box_layout: {
    position: 'absolute',
    top: 0,
    bottom: 39,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  on_orders_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  hero_title_box2_layout: {
    marginTop: 25,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  hero_title_box2: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  wallets_box_layout: {
    marginTop: 29,
    marginBottom: 0,
    marginLeft: 29,
    flexGrow: 1,
    marginRight: 29
  },
  wallets_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  flex_layout8: {
    overflow: 'visible',
    marginTop: 13,
    marginBottom: 0,
    marginLeft: 19,
    flexGrow: 1,
    marginRight: 25
  },
  flex4_row: {
    flexGrow: 0,
    flexShrink: 1
  },
  flex5_row: {
    flexGrow: 0,
    flexShrink: 1
  },
  flex6: {
    flexDirection: 'row'
  },
  flex6_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex6_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 131.5
  },
  flex7: {
    flexDirection: 'row'
  },
  flex7_layout: {
    overflow: 'visible',
    marginTop: 16.03,
    marginBottom: 15.97,
    marginLeft: 18.97,
    flexGrow: 1,
    marginRight: 13.5
  },
  flex7_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 40
  },
  group3: {
    width: '100%'
  },
  group3_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    minHeight: 40,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  group4: {
    width: '100%',
    backgroundColor: '#313454ff',
    borderRadius: 8,
    borderStyle: 'solid',
    borderColor: '#1b1f3aff',
    borderWidth: 0.5
  },
  group4_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: -16.030609130859375,
    height: 72,
    left: -18.9742431640625,
    right: -311.03027725219727
  },
  cover_group: {
    width: '100%'
  },
  cover_group_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    minHeight: 40,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  img: {
    resizeMode: 'contain'
  },
  img_layout: {
    marginTop: 6.94,
    height: 25.33,
    marginLeft: 9.76,
    width: 19.14,
    minWidth: 19.14
  },
  flex7_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 11.03
  },
  flex7_col1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 48
  },
  flex_layout1: {
    overflow: 'visible',
    marginTop: 1.97,
    marginBottom: 1.03,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex8_row: {
    flexGrow: 0,
    flexShrink: 1
  },
  bitcoin_box_layout: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  bitcoin_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  small_text_body_box_layout: {
    marginTop: 4,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  small_text_body_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  flex6_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 133.5
  },
  flex6_col1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 70.04
  },
  flex_layout2: {
    overflow: 'visible',
    marginTop: 18,
    marginBottom: 25,
    marginLeft: 11,
    flexGrow: 1,
    marginRight: 7.04
  },
  flex9_row: {
    flexGrow: 0,
    flexShrink: 1
  },
  small_text_body_box1_layout: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  small_text_body_box1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  small_text_body_box_layout1: {
    marginTop: 1,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex6_col2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 34.96
  },
  img_layout1: {
    marginTop: 25,
    height: 22,
    marginBottom: 25,
    width: 12,
    minWidth: 12,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  flex10: {
    flexDirection: 'row'
  },
  flex10_layout: {
    overflow: 'visible',
    marginTop: 13,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex10_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 140.5
  },
  flex11: {
    flexDirection: 'row'
  },
  flex11_layout: {
    overflow: 'visible',
    marginTop: 16,
    marginBottom: 15,
    marginLeft: 19,
    flexGrow: 1,
    marginRight: 3.5
  },
  flex11_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 40
  },
  group5: {
    width: '100%'
  },
  group5_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 1,
    minHeight: 40,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  group6: {
    width: '100%',
    backgroundColor: '#313454ff',
    borderRadius: 8,
    borderStyle: 'solid',
    borderColor: '#1b1f3aff',
    borderWidth: 0.5
  },
  group6_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: -16,
    height: 72,
    left: -19,
    right: -311
  },
  icon: {
    resizeMode: 'contain'
  },
  icon_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 0,
    height: 40,
    marginBottom: 0,
    left: 0,
    marginLeft: 0,
    width: 40,
    minWidth: 40,
    marginRight: 0
  },
  flex11_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 11
  },
  flex11_col1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 67
  },
  flex_layout3: {
    overflow: 'visible',
    marginTop: 5,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex12_row: {
    flexGrow: 0,
    flexShrink: 1
  },
  ethereum_box_layout: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  ethereum_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  small_text_body_box_layout2: {
    marginTop: 3,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex10_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 122.5
  },
  flex10_col1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 72.28
  },
  flex_layout4: {
    overflow: 'visible',
    marginTop: 18,
    marginBottom: 25,
    marginLeft: 13,
    flexGrow: 1,
    marginRight: 8.28
  },
  flex13_row: {
    flexGrow: 0,
    flexShrink: 1
  },
  small_text_body_box4_layout: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  small_text_body_box4: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  small_text_body_box_layout3: {
    marginTop: 1,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex10_col2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 34.72
  },
  img_layout2: {
    marginTop: 25,
    height: 22,
    marginBottom: 25,
    width: 12,
    minWidth: 12,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  flex14: {
    flexDirection: 'row'
  },
  flex14_layout: {
    overflow: 'visible',
    marginTop: 13,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex14_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 132
  },
  flex15: {
    flexDirection: 'row'
  },
  flex15_layout: {
    overflow: 'visible',
    marginTop: 15,
    marginBottom: 17,
    marginLeft: 19,
    flexGrow: 1,
    marginRight: 12
  },
  flex15_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 40
  },
  group7: {
    width: '100%'
  },
  group7_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    minHeight: 40,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  group8: {
    width: '100%',
    backgroundColor: '#313454ff',
    borderRadius: 8,
    borderStyle: 'solid',
    borderColor: '#1b1f3aff',
    borderWidth: 0.5
  },
  group8_layout: {
    position: 'absolute',
    overflow: 'visible',
    top: -15,
    height: 72,
    left: -19,
    right: -311
  },
  img_layout3: {
    marginTop: 11.14,
    height: 17.51,
    marginLeft: 11.87,
    width: 16.26,
    minWidth: 16.26
  },
  flex15_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 12
  },
  flex15_col1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 49
  },
  flex_layout5: {
    overflow: 'visible',
    marginTop: 5,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex16_row: {
    flexGrow: 0,
    flexShrink: 1
  },
  hedara_box_layout: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  hedara_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  small_text_body_box_layout4: {
    marginTop: 2,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex14_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 131
  },
  flex14_col1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 71.84
  },
  flex_layout6: {
    overflow: 'visible',
    marginTop: 18,
    marginBottom: 25,
    marginLeft: 9,
    flexGrow: 1,
    marginRight: 8.84
  },
  flex17_row: {
    flexGrow: 0,
    flexShrink: 1
  },
  small_text_body_box_layout5: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  small_text_body_box_layout6: {
    marginTop: 1,
    marginBottom: 0,
    marginLeft: 4,
    flexGrow: 1,
    marginRight: 4
  },
  flex14_col2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 35.16
  },
  img_layout4: {
    marginTop: 25,
    height: 22,
    marginBottom: 25,
    width: 12,
    minWidth: 12,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  group9: {
    width: '100%',
    backgroundColor: '#272d40ff'
  },
  group9_layout: {
    overflow: 'visible',
    marginTop: 150,
    marginBottom: 0,
    minHeight: 72,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex18: {
    flexDirection: 'row'
  },
  flex18_layout: {
    overflow: 'visible',
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 49,
    flexGrow: 1,
    marginRight: 49
  },
  flex18_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 35
  },
  flex_layout9: {
    overflow: 'visible',
    marginTop: 3.2,
    marginBottom: 4,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex19_row: {
    flexGrow: 0,
    flexShrink: 1
  },
  flex20: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  flex20_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 8.78,
    flexGrow: 1,
    marginRight: 8.24
  },
  flex20_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 3.69
  },
  img_layout5: {
    marginTop: 4.4,
    height: 10.73,
    marginBottom: 0,
    marginLeft: 0,
    width: 3.69,
    minWidth: 3.69,
    marginRight: 0
  },
  img_layout6: {
    marginTop: 9.75,
    height: 5.38,
    marginBottom: 0,
    marginLeft: 0,
    width: 3.69,
    minWidth: 3.69,
    marginRight: 0
  },
  img_layout7: {
    marginTop: 0,
    height: 15.13,
    marginBottom: 0,
    marginLeft: 0,
    width: 3.69,
    minWidth: 3.69,
    marginRight: 0
  },
  img_layout8: {
    marginTop: 4.4,
    height: 10.73,
    marginBottom: 0,
    marginLeft: 0,
    width: 3.69,
    minWidth: 3.69,
    marginRight: 0
  },
  market_box_layout: {
    marginTop: 6.66,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  market_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  flex18_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 62
  },
  flex18_col1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 34
  },
  flex_layout10: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 4,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex21_row: {
    flexGrow: 0,
    flexShrink: 1
  },
  icon_layout1: {
    marginTop: 0,
    height: 21.54,
    marginBottom: 0,
    marginLeft: 6,
    width: 21.54,
    minWidth: 21.54,
    marginRight: 6.46
  },
  search_box_layout: {
    marginTop: 3.46,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  search_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  flex18_space1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 48
  },
  flex18_col2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 42
  },
  flex_layout11: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 3.2,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex22_row: {
    flexGrow: 0,
    flexShrink: 1
  },
  icon_layout2: {
    marginTop: 0,
    height: 21.24,
    marginBottom: 0,
    marginLeft: 10.69,
    width: 21.54,
    minWidth: 21.54,
    marginRight: 9.77
  },
  portfolio_box1_layout: {
    marginTop: 3.76,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  portfolio_box1: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  flex18_space2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 49
  },
  flex18_col3: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 46
  },
  flex_layout12: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 4,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 5
  },
  flex23_row: {
    flexGrow: 0,
    flexShrink: 1
  },
  icon_layout3: {
    marginTop: 0,
    height: 21.54,
    marginBottom: 0,
    marginLeft: 10,
    width: 21.54,
    minWidth: 21.54,
    marginRight: 9.46
  },
  settings_box_layout: {
    marginTop: 3.46,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  settings_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  }
});
