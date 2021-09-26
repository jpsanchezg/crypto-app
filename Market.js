   /*
   npx react-native run-android
   
   */
import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native';

export default function Market(props) {
  return (
    <View style={[styles.content_box, styles.content_box_layout]}>
      <View style={styles.content_box_row}>
        <View style={[styles.coinroutes_box, styles.coinroutes_box_layout]}>
          <Text style={styles.coinroutes} ellipsizeMode={'clip'}>
            {'coinroutes'}
          </Text>
        </View>
      </View>
      <View style={styles.content_box_row1}>
        <View style={[styles.cover_group, styles.cover_group_layout]}>
          <View style={[styles.flex, styles.flex_layout]}>
            <View style={styles.flex_space} />
            <View style={styles.flex_col}>
              <View style={[styles.felipe_box, styles.felipe_box_layout]}>
                <Text style={styles.user} ellipsizeMode={'clip'}>
                  {'Felipe'}
                </Text>
              </View>
            </View>
            <View style={styles.flex_space1} />
            <View style={styles.flex_col1}>
              <View style={[styles.group, styles.group_layout1]}>
                <View style={[styles.group, styles.group_layout]}>
                  <View
                    style={[
                      styles.medium_title_wrap,
                      styles.medium_title_wrap_layout
                    ]}>
                    <View
                      style={[
                        styles.total_balance_box,
                        styles.total_balance_box_layout
                      ]}>
                      <Text style={styles.white} ellipsizeMode={'clip'}>
                        {'Total Balance'}
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.medium_title_box,
                        styles.medium_title_box_layout
                      ]}>
                      <Text style={styles.white} ellipsizeMode={'clip'}>
                        {'$25,800'}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.content_box_row2}>
        <View style={[styles.flex1, styles.flex1_layout]}>
          <View style={styles.flex1_col}>
            <View style={[styles.cover_group1, styles.cover_group1_layout]}>
              <View style={[styles.background, styles.background_layout]} />
              <View style={[styles.history_box, styles.history_box_layout]}>
                <Text style={styles.white} ellipsizeMode={'clip'}>
                  {'HISTORY'}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.flex1_col}>
            <View style={[styles.cover_group2, styles.cover_group2_layout]}>
              <View style={[styles.background1, styles.background1_layout]} />
              <View style={[styles.profile_box, styles.profile_box_layout]}>
                <Text style={styles.white} ellipsizeMode={'clip'}>
                  {'PROFILE'}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.content_box_row3}>
        <View style={[styles.cover_group, styles.cover_group_layout1]}>
          <View style={[styles.flex, styles.flex_layout1]}>
            <View style={styles.flex2_space} />
            <View style={styles.flex2_col}>
              <ImageBackground
                style={[styles.icon, styles.icon_layout]}
                source={require('./assets/c1b7c36fcbae94e12f0609338310addf.png')}
              />
            </View>
            <View style={styles.flex2_space1} />
            <View style={styles.flex2_col1}>
              <View style={[styles.flex3, styles.flex3_layout]}>
                <View style={styles.flex3_row}>
                  <View style={[styles.flex4, styles.flex4_layout]}>
                    <View style={styles.flex4_col}>
                      <View
                        style={[styles.bitcoin_box, styles.bitcoin_box_layout]}>
                        <Text style={styles.white} ellipsizeMode={'clip'}>
                          {'Bitcoin'}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.flex4_col}>
                      <View style={[styles.btc_box, styles.btc_box_layout]}>
                        <Text style={styles.white} ellipsizeMode={'clip'}>
                          {'BTC'}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.flex3_row}>
                  <View style={[styles.flex5, styles.flex5_layout]}>
                    <View style={styles.flex5_col}>
                      <View
                        style={[
                          styles.small_text_body_box,
                          styles.small_text_body_box_layout
                        ]}>
                        <Text
                          style={styles.white}
                          ellipsizeMode={'clip'}>
                          {'2,509.75'}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.flex5_col}>
                      <View
                        style={[
                          styles.small_text_body_box,
                          styles.small_text_body_box_layout
                        ]}>
                        <Text
                          style={styles.white}
                          ellipsizeMode={'clip'}>
                          {'+9.77%'}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.flex2_space2} />
            <View style={styles.flex2_col2}>
              <View style={[styles.cover_group4, styles.cover_group4_layout]}>
                <View style={[styles.background2, styles.background2_layout]} />
                <View style={[styles.buy_box, styles.buy_box_layout]}>
                  <Text style={styles.white} ellipsizeMode={'clip'}>
                    {'BUY'}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.flex2_space3} />
            <View style={styles.flex2_col3}>
              <View style={[styles.cover_group5, styles.cover_group5_layout]}>
                <View style={[styles.background3, styles.background3_layout]} />
                <View style={[styles.sell_box, styles.sell_box_layout]}>
                  <Text style={styles.white} ellipsizeMode={'clip'}>
                    {'SELL'}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.content_box_row4}>
        <View style={[styles.cover_group, styles.cover_group_layout2]}>
          <View style={[styles.flex, styles.flex_layout2]}>
            <View style={styles.flex6_space} />
            <View style={styles.flex6_col}>
              <ImageBackground
                style={[styles.icon, styles.icon_layout1]}
                source={require('./assets/90306fc3a9bc679aea03f2fcffd8d47e.png')}
              />
            </View>
            <View style={styles.flex6_space1} />
            <View style={styles.flex6_col1}>
              <View style={[styles.flex7, styles.flex7_layout]}>
                <View style={styles.flex7_row}>
                  <View style={[styles.flex8, styles.flex8_layout]}>
                    <View style={styles.flex8_col}>
                      <View
                        style={[
                          styles.ethereum_box,
                          styles.ethereum_box_layout
                        ]}>
                        <Text style={styles.white} ellipsizeMode={'clip'}>
                          {'Ethereum'}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.flex8_col}>
                      <View style={[styles.eth_box, styles.eth_box_layout]}>
                        <Text style={styles.white} ellipsizeMode={'clip'}>
                          {'ETH'}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.flex7_row}>
                  <View style={[styles.flex9, styles.flex9_layout]}>
                    <View style={styles.flex9_col}>
                      <View
                        style={[
                          styles.small_text_body_box,
                          styles.small_text_body_box_layout
                        ]}>
                        <Text
                          style={styles.white}
                          ellipsizeMode={'clip'}>
                          {'2,509.75'}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.flex9_col}>
                      <View
                        style={[
                          styles.small_text_body_box,
                          styles.small_text_body_box_layout
                        ]}>
                        <Text
                          style={styles.white}
                          ellipsizeMode={'clip'}>
                          {'-21.00%'}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.flex6_space2} />
            <View style={styles.flex6_col2}>
              <View style={[styles.cover_group7, styles.cover_group7_layout]}>
                <View style={[styles.background4, styles.background4_layout]} />
                <View style={[styles.buy_box, styles.buy_box_layout]}>
                  <Text style={styles.white} ellipsizeMode={'clip'}>
                    {'BUY'}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.flex6_space3} />
            <View style={styles.flex6_col3}>
              <View style={[styles.cover_group8, styles.cover_group8_layout]}>
                <View style={[styles.background5, styles.background5_layout]} />
                <View style={[styles.sell_box, styles.sell_box_layout]}>
                  <Text style={styles.white} ellipsizeMode={'clip'}>
                    {'SELL'}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.content_box_row5}>
        <View style={[styles.cover_group, styles.cover_group_layout3]}>
          <View style={[styles.flex, styles.flex_layout3]}>
            <View style={styles.flex10_space} />
            <View style={styles.flex10_col}>
              <ImageBackground
                style={[styles.icon, styles.icon_layout2]}
                source={require('./assets/fe16303e4b0cc786d45aa2d095515579.png')}
              />
            </View>
            <View style={styles.flex10_space1} />
            <View style={styles.flex10_col1}>
              <View style={[styles.flex11, styles.flex11_layout]}>
                <View style={styles.flex11_row}>
                  <View style={[styles.flex12, styles.flex12_layout]}>
                    <View style={styles.flex12_col}>
                      <View
                        style={[
                          styles.ftx_token_box,
                          styles.ftx_token_box_layout
                        ]}>
                        <Text style={styles.white} ellipsizeMode={'clip'}>
                          {'FTX Token'}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.flex12_col}>
                      <View style={[styles.ftt_box, styles.ftt_box_layout]}>
                        <Text style={styles.white} ellipsizeMode={'clip'}>
                          {'FTT'}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.flex11_row}>
                  <View style={[styles.flex13, styles.flex13_layout]}>
                    <View style={styles.flex13_col}>
                      <View
                        style={[
                          styles.small_text_body_box,
                          styles.small_text_body_box_layout
                        ]}>
                        <Text
                          style={styles.white}
                          ellipsizeMode={'clip'}>
                          {'553.06'}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.flex13_col}>
                      <View
                        style={[
                          styles.small_text_body_box,
                          styles.small_text_body_box_layout
                        ]}>
                        <Text
                          style={styles.white}
                          ellipsizeMode={'clip'}>
                          {'-22.97%'}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.flex10_space2} />
            <View style={styles.flex10_col2}>
              <View style={[styles.cover_group10, styles.cover_group10_layout]}>
                <View style={[styles.background6, styles.background6_layout]} />
                <View style={[styles.buy_box, styles.buy_box_layout]}>
                  <Text style={styles.white} ellipsizeMode={'clip'}>
                    {'BUY'}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.flex10_space3} />
            <View style={styles.flex10_col3}>
              <View style={[styles.cover_group11, styles.cover_group11_layout]}>
                <View style={[styles.background7, styles.background7_layout]} />
                <View style={[styles.sell_box, styles.sell_box_layout]}>
                  <Text style={styles.white} ellipsizeMode={'clip'}>
                    {'SELL'}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.content_box_row6}>
        <View style={[styles.cover_group, styles.cover_group_layout4]}>
          <View style={[styles.flex, styles.flex_layout4]}>
            <View style={styles.flex14_space} />
            <View style={styles.flex14_col}>
              <ImageBackground
                style={[styles.icon, styles.icon_layout3]}
                source={require('./assets/c2a1c46367adb9749c1829e87b49cfb9.png')}
              />
            </View>
            <View style={styles.flex14_space1} />
            <View style={styles.flex14_col1}>
              <View style={[styles.flex15, styles.flex15_layout]}>
                <View style={styles.flex15_row}>
                  <View style={[styles.flex16, styles.flex16_layout]}>
                    <View style={styles.flex16_col}>
                      <View
                        style={[styles.hedara_box, styles.hedara_box_layout]}>
                        <Text style={styles.white} ellipsizeMode={'clip'}>
                          {'Hedara'}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.flex16_col}>
                      <View style={[styles.hbar_box, styles.hbar_box_layout]}>
                        <Text style={styles.white} ellipsizeMode={'clip'}>
                          {'HBAR'}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.flex15_row}>
                  <View style={[styles.flex17, styles.flex17_layout]}>
                    <View style={styles.flex17_col}>
                      <View
                        style={[
                          styles.small_text_body_box,
                          styles.small_text_body_box_layout
                        ]}>
                        <Text
                          style={styles.white}
                          ellipsizeMode={'clip'}>
                          {'105.06'}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.flex17_col}>
                      <View
                        style={[
                          styles.small_text_body_box,
                          styles.small_text_body_box_layout
                        ]}>
                        <Text
                          style={styles.white}
                          ellipsizeMode={'clip'}>
                          {'+16.31%'}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.flex14_space2} />
            <View style={styles.flex14_col2}>
              <View style={[styles.cover_group13, styles.cover_group13_layout]}>
                <View style={[styles.background8, styles.background8_layout]} />
                <View style={[styles.buy_box, styles.buy_box_layout]}>
                  <Text style={styles.white} ellipsizeMode={'clip'}>
                    {'BUY'}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.flex14_space3} />
            <View style={styles.flex14_col3}>
              <View style={[styles.cover_group14, styles.cover_group14_layout]}>
                <View style={[styles.background9, styles.background9_layout]} />
                <View style={[styles.sell_box, styles.sell_box_layout]}>
                  <Text style={styles.white} ellipsizeMode={'clip'}>
                    {'SELL'}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.content_box_row7}>
        <View style={[styles.cover_group, styles.cover_group_layout5]}>
          <View style={[styles.flex, styles.flex_layout5]}>
            <View style={styles.flex18_space} />
            <View style={styles.flex18_col}>
              <ImageBackground
                style={[styles.icon, styles.icon_layout]}
                source={require('./assets/64ec1eba59195f67b4f23d4aaa9134f0.png')}
              />
            </View>
            <View style={styles.flex18_space1} />
            <View style={styles.flex18_col1}>
              <View style={[styles.flex19, styles.flex19_layout]}>
                <View style={styles.flex19_row}>
                  <View style={[styles.flex20, styles.flex20_layout]}>
                    <View style={styles.flex20_col}>
                      <View
                        style={[styles.solana_box, styles.solana_box_layout]}>
                        <Text style={styles.white} ellipsizeMode={'clip'}>
                          {'Solana'}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.flex20_col}>
                      <View style={[styles.sol_box, styles.sol_box_layout]}>
                        <Text style={styles.white} ellipsizeMode={'clip'}>
                          {'SOL'}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.flex19_row}>
                  <View style={[styles.flex21, styles.flex21_layout]}>
                    <View style={styles.flex21_col}>
                      <View
                        style={[
                          styles.small_text_body_box,
                          styles.small_text_body_box_layout
                        ]}>
                        <Text
                          style={styles.white}
                          ellipsizeMode={'clip'}>
                          {'5.29'}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.flex21_col}>
                      <View
                        style={[
                          styles.small_text_body_box,
                          styles.small_text_body_box_layout
                        ]}>
                        <Text
                          style={styles.white}
                          ellipsizeMode={'clip'}>
                          {'-16.58%'}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.flex18_space2} />
            <View style={styles.flex18_col2}>
              <View style={[styles.cover_group16, styles.cover_group16_layout]}>
                <View
                  style={[styles.background10, styles.background10_layout]}
                />
                <View style={[styles.buy_box, styles.buy_box_layout]}>
                  <Text style={styles.white} ellipsizeMode={'clip'}>
                    {'BUYs'}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.flex18_space3} />
            <View style={styles.flex18_col3}>
              <View style={[styles.cover_group17, styles.cover_group17_layout]}>
                <View
                  style={[styles.background11, styles.background11_layout]}
                />
                <View style={[styles.sell_box, styles.sell_box_layout]}>
                  <Text style={styles.white} ellipsizeMode={'clip'}>
                    {'SELL'}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.content_box_row8}>
        <View style={[styles.content_box1, styles.content_box1_layout]}>
          <View style={styles.content_box1_space} />
          <View style={styles.content_box1_col}>
            <ImageBackground
              style={[styles.icon, styles.icon_layout5]}
              source={require('./assets/7034fd86be4be2667942ec1601168b0f.png')}
            />
          </View>
          <View style={styles.content_box1_space1} />
          <View style={styles.content_box1_col1}>
            <View style={[styles.tether_box, styles.tether_box_layout]}>
              <Text style={styles.white} ellipsizeMode={'clip'}>
                {'Tether'}
              </Text>
            </View>
          </View>
          <View style={styles.content_box1_space2} />
          <View style={styles.content_box1_col2}>
            <View style={[styles.usdt_box, styles.usdt_box_layout]}>
              <Text style={styles.white} ellipsizeMode={'clip'}>
                {'USDT'}
              </Text>
            </View>
          </View>
          <View style={styles.content_box1_space3} />
          <View style={styles.content_box1_col3}>
            <View style={[styles.cover_group18, styles.cover_group18_layout]}>
              <View style={[styles.background12, styles.background12_layout]} />
              <View style={[styles.buy_box, styles.buy_box_layout]}>
                <Text style={styles.white} ellipsizeMode={'clip'}>
                  {'BUY'}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.content_box1_space4} />
          <View style={styles.content_box1_col4}>
            <View style={[styles.cover_group19, styles.cover_group19_layout]}>
              <View style={[styles.background13, styles.background13_layout]} />
              <View style={[styles.sell_box, styles.sell_box_layout]}>
                <Text style={styles.white} ellipsizeMode={'clip'}>
                  {'SELL'}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

Market.inStorybook = true;
Market.fitScreen = false;
Market.scrollHeight = 896;

const styles = StyleSheet.create({
  content_box: {
    backgroundColor: '#1a1d2cff'
  },
  white:{
    color: '#FFFFFF'
  },
  coinroutes:{
    fontSize: 40,
    color: '#FFFFFF',
    fontWeight: "bold"
  },
  user:{
    fontSize: 25,
    color: '#FFFFFF',
    fontWeight: "bold"

  },
  content_box_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    minHeight: 896,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  content_box_row: {
    flexGrow: 0,
    flexShrink: 0,
    minHeight: 0
  },
  coinroutes_box_layout: {
    marginTop: 47,
    marginBottom: 0,
    marginLeft: 22,
    flexGrow: 1,
    marginRight: 22
  },
  coinroutes_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  content_box_row1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 98
  },
  cover_group: {
    width: '100%',
    backgroundColor: '#313454ff',
    borderRadius: 8,
    borderStyle: 'solid',
    borderColor: '#1b1f3aff',
    borderWidth: 0.5
  },
  cover_group_layout: {
    overflow: 'visible',
    marginTop: 7,
    marginBottom: 0,
    minHeight: 91,
    marginLeft: 22,
    flexGrow: 1,
    marginRight: 22
  },
  flex: {
    flexDirection: 'row'
  },
  flex_layout: {
    overflow: 'visible',
    marginTop: 22,
    marginBottom: 22,
    marginLeft: 12,
    flexGrow: 1,
    marginRight: 12
  },
  flex_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 8
  },
  flex_col: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 0
  },
  felipe_box_layout: {
    marginTop: 4,
    marginBottom: 14,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  felipe_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  flex_space1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 181
  },
  flex_col1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 92
  },
  group: {
    width: '100%'
  },
  group_layout1: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 3,
    minHeight: 44,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  group_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    minHeight: 44,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  medium_title_wrap: {
    width: '100%'
  },
  medium_title_wrap_layout: {
    marginTop: 0,
    marginBottom: 0,
    minHeight: 44,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  total_balance_box_layout: {
    position: 'absolute',
    top: 0,
    bottom: 24,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  total_balance_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  medium_title_box_layout: {
    marginTop: 15,
    marginBottom: 0,
    marginLeft: 3,
    flexGrow: 1,
    marginRight: 3
  },
  medium_title_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  content_box_row2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 65
  },
  flex1: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  flex1_layout: {
    overflow: 'visible',
    marginTop: 25,
    marginBottom: 0,
    marginLeft: 22,
    flexGrow: 1,
    marginRight: 22
  },
  flex1_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 104
  },
  cover_group1: {
    width: '100%'
  },
  cover_group1_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    minHeight: 40,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  background: {
    width: '100%',
    backgroundColor: '#563a93ff',
    borderRadius: 6,
    borderStyle: 'solid',
    borderColor: '#895aeaff',
    
    
    borderWidth: 1
  },
  background_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 0,
    height: 40,
    marginBottom: 0,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  history_box_layout: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    flexGrow: 1,
    color: '#F44336',
    marginRight: 20
  },
  history:{
    color: '#FFFFFF'

  },

  history_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    color: '#F44336',
    justifyContent: 'flex-end'
  },
  cover_group2: {
    width: '100%'
  },
  cover_group2_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    minHeight: 40,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  background1: {
    width: '100%',
    backgroundColor: '#102e6aff',
    borderRadius: 6,
    borderStyle: 'solid',
    borderColor: '#308a6fff',
    borderWidth: 1
  },
  background1_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 0,
    height: 40,
    marginBottom: 0,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  profile_box_layout: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 16,
    flexGrow: 1,
    marginRight: 16
  },
  profile_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  content_box_row3: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 132
  },
  cover_group_layout1: {
    overflow: 'visible',
    marginTop: 60,
    marginBottom: 0,
    minHeight: 72,
    marginLeft: 22,
    flexGrow: 1,
    marginRight: 22
  },
  flex_layout1: {
    overflow: 'visible',
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 16,
    flexGrow: 1,
    marginRight: 16
  },
  flex2_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 3
  },
  flex2_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 40
  },
  icon: {
    resizeMode: 'contain'
  },
  icon_layout: {
    marginTop: 1,
    height: 40,
    marginBottom: 1,
    marginLeft: 0,
    width: 40,
    minWidth: 40,
    marginRight: 0
  },
  flex2_space1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 12
  },
  flex2_col1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 83
  },
  flex3: {},
  flex3_layout: {
    overflow: 'visible',
    marginTop: 3,
    marginBottom: 2,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex3_row: {
    flexGrow: 0,
    flexShrink: 1
  },
  flex4: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  flex4_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 7
  },
  flex4_col: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 0
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
    justifyContent: 'flex-start'
  },
  btc_box_layout: {
    marginTop: 3,
    marginBottom: 2,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  btc_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  flex5: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  flex5_layout: {
    overflow: 'visible',
    marginTop: 2,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex5_col: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 0
  },
  small_text_body_box_layout: {
    marginTop: 0,
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
  flex2_space2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 47
  },
  flex2_col2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 72
  },
  cover_group4: {
    width: '100%'
  },
  cover_group4_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 2,
    minHeight: 40,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  background2: {
    width: '100%',
    backgroundColor: '#3c933aff',
    borderRadius: 6,
    borderStyle: 'solid',
    borderColor: '#40683eff',
    borderWidth: 1
  },
  background2_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 0,
    height: 40,
    marginBottom: 0,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  buy_box_layout: {
    marginTop: 10,
    marginBottom: 10,
    width: 36,
    minWidth: 36,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  buy_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  flex2_space3: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 9
  },
  flex2_col3: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 72
  },
  cover_group5: {
    width: '100%'
  },
  cover_group5_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 2,
    minHeight: 40,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  background3: {
    width: '100%',
    backgroundColor: '#6da9e7ff',
    borderRadius: 6,
    borderStyle: 'solid',
    borderColor: '#1f6fc1ff',
    borderWidth: 1
  },
  background3_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 0,
    height: 40,
    marginBottom: 0,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  sell_box_layout: {
    marginTop: 9,
    marginBottom: 11,
    marginLeft: 15,
    flexGrow: 1,
    marginRight: 15
  },
  sell_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  content_box_row4: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 80
  },
  cover_group_layout2: {
    overflow: 'visible',
    marginTop: 8,
    marginBottom: 0,
    minHeight: 72,
    marginLeft: 22,
    flexGrow: 1,
    marginRight: 22
  },
  flex_layout2: {
    overflow: 'visible',
    marginTop: 13,
    marginBottom: 13,
    marginLeft: 16,
    flexGrow: 1,
    marginRight: 16
  },
  flex6_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 3
  },
  flex6_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 40
  },
  icon_layout1: {
    marginTop: 0,
    height: 40,
    marginBottom: 6,
    marginLeft: 0,
    width: 40,
    minWidth: 40,
    marginRight: 0
  },
  flex6_space1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 12
  },
  flex6_col1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 94
  },
  flex7: {},
  flex7_layout: {
    overflow: 'visible',
    marginTop: 5,
    marginBottom: 4,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex7_row: {
    flexGrow: 0,
    flexShrink: 1
  },
  flex8: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  flex8_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex8_col: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 0
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
    justifyContent: 'flex-start'
  },
  eth_box_layout: {
    marginTop: 5,
    marginBottom: 3,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  eth_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  flex9: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  flex9_layout: {
    overflow: 'visible',
    marginTop: 2,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 6
  },
  flex9_col: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 0
  },
  flex6_space2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 36
  },
  flex6_col2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 72
  },
  cover_group7: {
    width: '100%'
  },
  cover_group7_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 6,
    minHeight: 40,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  background4: {
    width: '100%',
    backgroundColor: '#3c933aff',
    borderRadius: 6,
    borderStyle: 'solid',
    borderColor: '#40683eff',
    borderWidth: 1
  },
  background4_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 0,
    height: 40,
    marginBottom: 0,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  flex6_space3: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 9
  },
  flex6_col3: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 72
  },
  cover_group8: {
    width: '100%'
  },
  cover_group8_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 6,
    minHeight: 40,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  background5: {
    width: '100%',
    backgroundColor: '#6da9e7ff',
    borderRadius: 6,
    borderStyle: 'solid',
    borderColor: '#1f6fc1ff',
    borderWidth: 1
  },
  background5_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 0,
    height: 40,
    marginBottom: 0,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  content_box_row5: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 80
  },
  cover_group_layout3: {
    overflow: 'visible',
    marginTop: 8,
    marginBottom: 0,
    minHeight: 72,
    marginLeft: 22,
    flexGrow: 1,
    marginRight: 22
  },
  flex_layout3: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 16,
    flexGrow: 1,
    marginRight: 16
  },
  flex10_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 3
  },
  flex10_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 40
  },
  icon_layout2: {
    marginTop: 16,
    height: 40,
    marginBottom: 16,
    marginLeft: 0,
    width: 40,
    minWidth: 40,
    marginRight: 0
  },
  flex10_space1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 12
  },
  flex10_col1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 96
  },
  flex11: {},
  flex11_layout: {
    overflow: 'visible',
    marginTop: 18,
    marginBottom: 17,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex11_row: {
    flexGrow: 0,
    flexShrink: 1
  },
  flex12: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  flex12_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex12_col: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 0
  },
  ftx_token_box_layout: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  ftx_token_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  ftt_box_layout: {
    marginTop: 5,
    marginBottom: 3,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  ftt_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  flex13: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  flex13_layout: {
    overflow: 'visible',
    marginTop: 2,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 15
  },
  flex13_col: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 0
  },
  flex10_space2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 34
  },
  flex10_col2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 72
  },
  cover_group10: {
    width: '100%'
  },
  cover_group10_layout: {
    overflow: 'visible',
    marginTop: 16,
    marginBottom: 16,
    minHeight: 40,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  background6: {
    width: '100%',
    backgroundColor: '#3c933aff',
    borderRadius: 6,
    borderStyle: 'solid',
    borderColor: '#40683eff',
    borderWidth: 1
  },
  background6_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 0,
    height: 40,
    marginBottom: 0,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  flex10_space3: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 9
  },
  flex10_col3: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 72
  },
  cover_group11: {
    width: '100%'
  },
  cover_group11_layout: {
    overflow: 'visible',
    marginTop: 16,
    marginBottom: 16,
    minHeight: 40,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  background7: {
    width: '100%',
    backgroundColor: '#6da9e7ff',
    borderRadius: 6,
    borderStyle: 'solid',
    borderColor: '#1f6fc1ff',
    borderWidth: 1
  },
  background7_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 0,
    height: 40,
    marginBottom: 0,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  content_box_row6: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 80
  },
  cover_group_layout4: {
    overflow: 'visible',
    marginTop: 8,
    marginBottom: 0,
    minHeight: 72,
    marginLeft: 22,
    flexGrow: 1,
    marginRight: 22
  },
  flex_layout4: {
    overflow: 'visible',
    marginTop: 13,
    marginBottom: 13,
    marginLeft: 16,
    flexGrow: 1,
    marginRight: 16
  },
  flex14_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 3
  },
  flex14_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 40
  },
  icon_layout3: {
    marginTop: 0,
    height: 40,
    marginBottom: 6,
    marginLeft: 0,
    width: 40,
    minWidth: 40,
    marginRight: 0
  },
  flex14_space1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 12
  },
  flex14_col1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 81
  },
  flex15: {},
  flex15_layout: {
    overflow: 'visible',
    marginTop: 5,
    marginBottom: 4,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex15_row: {
    flexGrow: 0,
    flexShrink: 1
  },
  flex16: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  flex16_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex16_col: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 0
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
  hbar_box_layout: {
    marginTop: 7,
    marginBottom: 3,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  hbar_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  flex17: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  flex17_layout: {
    overflow: 'visible',
    marginTop: 2,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 1
  },
  flex17_col: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 0
  },
  flex14_space2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 49
  },
  flex14_col2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 72
  },
  cover_group13: {
    width: '100%'
  },
  cover_group13_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 6,
    minHeight: 40,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  background8: {
    width: '100%',
    backgroundColor: '#3c933aff',
    borderRadius: 6,
    borderStyle: 'solid',
    borderColor: '#40683eff',
    borderWidth: 1
  },
  background8_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 0,
    height: 40,
    marginBottom: 0,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  flex14_space3: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 9
  },
  flex14_col3: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 72
  },
  cover_group14: {
    width: '100%'
  },
  cover_group14_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 6,
    minHeight: 40,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  background9: {
    width: '100%',
    backgroundColor: '#6da9e7ff',
    borderRadius: 6,
    borderStyle: 'solid',
    borderColor: '#1f6fc1ff',
    borderWidth: 1
  },
  background9_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 0,
    height: 40,
    marginBottom: 0,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  content_box_row7: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 80
  },
  cover_group_layout5: {
    overflow: 'visible',
    marginTop: 8,
    marginBottom: 0,
    minHeight: 72,
    marginLeft: 22,
    flexGrow: 1,
    marginRight: 22
  },
  flex_layout5: {
    overflow: 'visible',
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 16,
    flexGrow: 1,
    marginRight: 16
  },
  flex18_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 3
  },
  flex18_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 40
  },
  flex18_space1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 12
  },
  flex18_col1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 75
  },
  flex19: {},
  flex19_layout: {
    overflow: 'visible',
    marginTop: 3,
    marginBottom: 2,
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
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex20_col: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 0
  },
  solana_box_layout: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  solana_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  sol_box_layout: {
    marginTop: 5,
    marginBottom: 3,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  sol_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  flex21: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  flex21_layout: {
    overflow: 'visible',
    marginTop: 2,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 10
  },
  flex21_col: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 0
  },
  flex18_space2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 55
  },
  flex18_col2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 72
  },
  cover_group16: {
    width: '100%'
  },
  cover_group16_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 2,
    minHeight: 40,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  background10: {
    width: '100%',
    backgroundColor: '#3c933aff',
    borderRadius: 6,
    borderStyle: 'solid',
    borderColor: '#40683eff',
    borderWidth: 1
  },
  background10_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 0,
    height: 40,
    marginBottom: 0,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  flex18_space3: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 9
  },
  flex18_col3: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 72
  },
  cover_group17: {
    width: '100%'
  },
  cover_group17_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 2,
    minHeight: 40,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  background11: {
    width: '100%',
    backgroundColor: '#6da9e7ff',
    borderRadius: 6,
    borderStyle: 'solid',
    borderColor: '#1f6fc1ff',
    borderWidth: 1
  },
  background11_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 0,
    height: 40,
    marginBottom: 0,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  content_box_row8: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 80
  },
  content_box1: {
    backgroundColor: '#313454ff',
    borderRadius: 8,
    borderStyle: 'solid',
    borderColor: '#1b1f3aff',
    borderWidth: 0.5,
    flexDirection: 'row'
  },
  content_box1_layout: {
    overflow: 'visible',
    marginTop: 8,
    marginBottom: 0,
    minHeight: 72,
    marginLeft: 22,
    flexGrow: 1,
    marginRight: 22
  },
  content_box1_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 19
  },
  content_box1_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 40
  },
  icon_layout5: {
    marginTop: 17,
    height: 40,
    marginBottom: 15,
    marginLeft: 0,
    width: 40,
    minWidth: 40,
    marginRight: 0
  },
  content_box1_space1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 12
  },
  content_box1_col1: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 0
  },
  tether_box_layout: {
    marginTop: 18,
    marginBottom: 34,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  tether_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  content_box1_space2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 2
  },
  content_box1_col2: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 0
  },
  usdt_box_layout: {
    marginTop: 23,
    marginBottom: 37,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  usdt_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  content_box1_space3: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 54
  },
  content_box1_col3: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 72
  },
  cover_group18: {
    width: '100%'
  },
  cover_group18_layout: {
    overflow: 'visible',
    marginTop: 13,
    marginBottom: 19,
    minHeight: 40,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  background12: {
    width: '100%',
    backgroundColor: '#3c933aff',
    borderRadius: 6,
    borderStyle: 'solid',
    borderColor: '#40683eff',
    borderWidth: 1
  },
  background12_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 0,
    height: 40,
    marginBottom: 0,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  content_box1_space4: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 9
  },
  content_box1_col4: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 88
  },
  cover_group19: {
    width: '100%'
  },
  cover_group19_layout: {
    overflow: 'visible',
    marginTop: 13,
    marginBottom: 19,
    minHeight: 40,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 16
  },
  background13: {
    width: '100%',
    backgroundColor: '#6da9e7ff',
    borderRadius: 6,
    borderStyle: 'solid',
    borderColor: '#1f6fc1ff',
    borderWidth: 1
  },
  background13_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 0,
    height: 40,
    marginBottom: 0,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  content_box_row9: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 110
  },
  cover_group20: {
    width: '100%',
    backgroundColor: '#272d40ff'
  },
  cover_group20_layout: {
    overflow: 'visible',
    marginTop: 39,
    marginBottom: 0,
    minHeight: 71,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex_layout6: {
    overflow: 'visible',
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 49,
    flexGrow: 1,
    marginRight: 49
  },
  flex22_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 37
  },
  flex23: {},
  flex23_layout: {
    overflow: 'visible',
    marginTop: 3.2,
    marginBottom: 3,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex23_row: {
    flexGrow: 0,
    flexShrink: 1
  },
  group2: {
    width: '100%'
  },
  group2_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    minHeight: 15.13,
    marginLeft: 8.78,
    width: 17.98,
    minWidth: 17.98
  },
  decorator: {
    resizeMode: 'contain'
  },
  decorator_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 9.75,
    height: 5.38,
    marginBottom: 0,
    left: 4.77,
    width: 3.69,
    minWidth: 3.69
  },
  image: {
    resizeMode: 'contain'
  },
  image_layout: {
    marginTop: 0,
    height: 15.13,
    marginBottom: 0,
    marginLeft: 'auto',
    width: 3.69,
    minWidth: 3.69,
    marginRight: 4.77
  },
  decorator_layout1: {
    position: 'absolute',
    top: 0,
    marginTop: 4.4,
    height: 10.73,
    marginBottom: 0,
    width: 3.69,
    minWidth: 3.69,
    right: 0
  },
  decorator_layout2: {
    position: 'absolute',
    top: 0,
    marginTop: 4.4,
    height: 10.73,
    marginBottom: 0,
    left: 0,
    width: 3.69,
    minWidth: 3.69
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
  flex22_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 60
  },
  flex24: {},
  flex24_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 3,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex24_row: {
    flexGrow: 0,
    flexShrink: 1
  },
  icon_layout6: {
    marginTop: 0,
    height: 21.54,
    marginBottom: 0,
    marginLeft: 6,
    width: 21.54,
    minWidth: 21.54,
    marginRight: 9.46
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
  flex22_space1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 45
  },
  flex22_col2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 44
  },
  flex25: {},
  flex25_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 3,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex25_row: {
    flexGrow: 0,
    flexShrink: 1
  },
  icon_layout7: {
    marginTop: 0,
    height: 21.24,
    marginBottom: 0,
    width: 21.54,
    minWidth: 21.54,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  portfolio_box_layout: {
    marginTop: 3.76,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  portfolio_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  flex22_space2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 47
  },
  flex22_col3: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 46
  },
  flex26: {},
  flex26_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 3,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 3
  },
  flex26_row: {
    flexGrow: 0,
    flexShrink: 1
  },
  icon_layout8: {
    marginTop: 0,
    height: 21.54,
    marginBottom: 0,
    marginLeft: 10,
    width: 21.54,
    minWidth: 21.54,
    marginRight: 11.46
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
