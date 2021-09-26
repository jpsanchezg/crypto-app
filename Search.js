/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native';

export default function Search(props) {
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
        <View style={[styles.flex, styles.flex_layout]}>
          <View style={styles.flex_col}>
            <ImageBackground
              style={[styles.icon, styles.icon_layout]}
              source={require('./assets/6643f94372f7419b16772606bf641d28.png')}
            />
          </View>
          <View style={styles.flex_col1}>
            <View style={[styles.rect, styles.rect_layout]} />
          </View>
        </View>
      </View>
      <View style={styles.content_box_row2}>
        <View style={[styles.group, styles.group_layout]}>
          <View style={[styles.flex1, styles.flex1_layout]}>
            <View style={styles.flex1_col}>
              <ImageBackground
                style={[styles.icon, styles.icon_layout1]}
                source={require('./assets/e7b7bdef5b2c2b24490c540f0303ddd3.png')}
              />
            </View>
            <View style={styles.flex1_space} />
            <View style={styles.flex1_col1}>
              <View style={[styles.flex2, styles.flex2_layout]}>
                <View style={styles.flex2_row}>
                  <View style={[styles.flex, styles.flex_layout1]}>
                    <View style={styles.flex3_col}>
                      <View
                        style={[
                          styles.dogecoin_box,
                          styles.dogecoin_box_layout
                        ]}>
                        <Text style={styles.dogecoin} ellipsizeMode={'clip'}>
                          {'Dogecoin '}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.flex3_col}>
                      <View style={[styles.doge_box, styles.doge_box_layout]}>
                        <Text style={styles.doge} ellipsizeMode={'clip'}>
                          {'DOGE'}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.flex2_row}>
                  <View style={[styles.flex, styles.flex_layout2]}>
                    <View style={styles.flex4_col}>
                      <View
                        style={[
                          styles.small_text_body_box,
                          styles.small_text_body_box_layout
                        ]}>
                        <Text
                          style={styles.small_text_body}
                          ellipsizeMode={'clip'}>
                          {'3,509.75'}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.flex4_col}>
                      <View
                        style={[
                          styles.small_text_body_box,
                          styles.small_text_body_box_layout
                        ]}>
                        <Text
                          style={styles.small_text_body1}
                          ellipsizeMode={'clip'}>
                          {'+10.77%'}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.flex1_space1} />
            <View style={styles.flex1_col2}>
              <View style={[styles.cover_group, styles.cover_group_layout]}>
                <View style={[styles.background, styles.background_layout]} />
                <View style={[styles.buy_box, styles.buy_box_layout]}>
                  <Text style={styles.buy} ellipsizeMode={'clip'}>
                    {'BUY'}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.flex1_space2} />
            <View style={styles.flex1_col3}>
              <View style={[styles.cover_group, styles.cover_group_layout1]}>
                <View style={[styles.background1, styles.background1_layout]} />
                <View style={[styles.sell_box, styles.sell_box_layout]}>
                  <Text style={styles.sell} ellipsizeMode={'clip'}>
                    {'SELL'}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.content_box_row3}>
        <View style={[styles.group1, styles.group1_layout]}>
          <View style={[styles.flex5, styles.flex5_layout]}>
            <View style={styles.flex5_col}>
              <View style={[styles.flex6, styles.flex6_layout]}>
                <View style={styles.flex6_row}>
                  <View style={[styles.flex, styles.flex_layout3]}>
                    <View style={styles.flex7_col}>
                      <ImageBackground
                        style={[styles.img, styles.img_layout]}
                        source={require('./assets/963e53cdb8680ab5e0cfb94c6ff17c01.png')}
                      />
                    </View>
                    <View style={styles.flex7_col}>
                      <ImageBackground
                        style={[styles.img, styles.img_layout1]}
                        source={require('./assets/717fdbd8c7c46e68e3a839ca9f6943e1.png')}
                      />
                    </View>
                    <View style={styles.flex7_col}>
                      <ImageBackground
                        style={[styles.img, styles.img_layout2]}
                        source={require('./assets/fcad7a34dc72874841fe2d9be4a39155.png')}
                      />
                    </View>
                    <View style={styles.flex7_col}>
                      <ImageBackground
                        style={[styles.img, styles.img_layout]}
                        source={require('./assets/9b7e6fc3373edf78e5701c65c98eb939.png')}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.flex6_row}>
                  <View style={[styles.market_box, styles.market_box_layout]}>
                    <Text style={styles.market} ellipsizeMode={'clip'}>
                      {'Market'}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.flex5_space} />
            <View style={styles.flex5_col1}>
              <View style={[styles.flex8, styles.flex8_layout]}>
                <View style={styles.flex8_row}>
                  <ImageBackground
                    style={[styles.icon, styles.icon_layout2]}
                    source={require('./assets/ebd405fa5cec096fb18462366f2778bb.png')}
                  />
                </View>
                <View style={styles.flex8_row}>
                  <View style={[styles.search_box, styles.search_box_layout]}>
                    <Text style={styles.search} ellipsizeMode={'clip'}>
                      {'Search'}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.flex5_space1} />
            <View style={styles.flex5_col2}>
              <View style={[styles.flex9, styles.flex9_layout]}>
                <View style={styles.flex9_row}>
                  <ImageBackground
                    style={[styles.icon, styles.icon_layout3]}
                    source={require('./assets/a93dd01ea6a5e33e5a495ece5f0f91df.png')}
                  />
                </View>
                <View style={styles.flex9_row}>
                  <View
                    style={[styles.portfolio_box, styles.portfolio_box_layout]}>
                    <Text style={styles.portfolio} ellipsizeMode={'clip'}>
                      {'Portfolio'}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.flex5_space2} />
            <View style={styles.flex5_col3}>
              <View style={[styles.flex10, styles.flex10_layout]}>
                <View style={styles.flex10_row}>
                  <ImageBackground
                    style={[styles.icon, styles.icon_layout4]}
                    source={require('./assets/abd88c24de7500ae02ebd024dadd8580.png')}
                  />
                </View>
                <View style={styles.flex10_row}>
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
  );
}

Search.inStorybook = true;
Search.fitScreen = false;
Search.scrollHeight = 896;

const styles = StyleSheet.create({
  content_box: {
    backgroundColor: '#1a1d2cff'
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
    marginTop: 28.69,
    marginBottom: 0,
    marginLeft: 28,
    flexGrow: 1,
    marginRight: 28
  },
  coinroutes_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  content_box_row1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 70
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  flex_layout: {
    overflow: 'visible',
    marginTop: 20,
    marginBottom: 0,
    marginLeft: 17,
    flexGrow: 1,
    marginRight: 20
  },
  flex_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 31
  },
  icon: {
    resizeMode: 'contain'
  },
  icon_layout: {
    marginTop: 9,
    height: 31,
    marginBottom: 10,
    marginLeft: 0,
    width: 31,
    minWidth: 31,
    marginRight: 0
  },
  flex_col1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 329
  },
  rect: {
    width: '100%',
    backgroundColor: '#313454ff',
    borderRadius: 25,
    borderStyle: 'solid',
    borderColor: '#1b203aff',
    borderWidth: 0.5
  },
  rect_layout: {
    marginTop: 0,
    height: 50,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  content_box_row2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 135
  },
  group: {
    width: '100%',
    backgroundColor: '#313454ff',
    borderRadius: 8,
    borderStyle: 'solid',
    borderColor: '#1b1f3aff',
    borderWidth: 0.5
  },
  group_layout: {
    overflow: 'visible',
    marginTop: 63,
    marginBottom: 0,
    minHeight: 72,
    marginLeft: 22,
    flexGrow: 1,
    marginRight: 22
  },
  flex1: {
    flexDirection: 'row'
  },
  flex1_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 10,
    flexGrow: 1,
    marginRight: 10
  },
  flex1_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 40
  },
  icon_layout1: {
    marginTop: 17,
    height: 40,
    marginBottom: 15,
    marginLeft: 0,
    width: 40,
    minWidth: 40,
    marginRight: 0
  },
  flex1_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 21
  },
  flex1_col1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 99
  },
  flex2: {},
  flex2_layout: {
    overflow: 'visible',
    marginTop: 18,
    marginBottom: 18,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex2_row: {
    flexGrow: 0,
    flexShrink: 1
  },
  flex_layout1: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex3_col: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 0
  },
  dogecoin_box_layout: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  dogecoin_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  doge_box_layout: {
    marginTop: 3,
    marginBottom: 2,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  doge_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  flex_layout2: {
    overflow: 'visible',
    marginTop: 3,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 14
  },
  flex4_col: {
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
  flex1_space1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 31
  },
  flex1_col2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 72
  },
  cover_group: {
    width: '100%'
  },
  cover_group_layout: {
    overflow: 'visible',
    marginTop: 15,
    marginBottom: 17,
    minHeight: 40,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  background: {
    width: '100%',
    backgroundColor: '#3c933aff',
    borderRadius: 6,
    borderStyle: 'solid',
    borderColor: '#40683eff',
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
  buy_box_layout: {
    marginTop: 10,
    marginBottom: 14,
    width: 30,
    minWidth: 30,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  buy_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  flex1_space2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 9
  },
  flex1_col3: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 78
  },
  cover_group_layout1: {
    overflow: 'visible',
    marginTop: 15,
    marginBottom: 17,
    minHeight: 40,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 6
  },
  background1: {
    width: '100%',
    backgroundColor: '#6da9e7ff',
    borderRadius: 6,
    borderStyle: 'solid',
    borderColor: '#1f6fc1ff',
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
  sell_box_layout: {
    marginTop: 9,
    marginBottom: 15,
    width: 36,
    minWidth: 36,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  sell_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  content_box_row3: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 588
  },
  group1: {
    width: '100%',
    backgroundColor: '#272d40ff'
  },
  group1_layout: {
    overflow: 'visible',
    marginTop: 516,
    marginBottom: 0,
    minHeight: 72,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex5: {
    flexDirection: 'row'
  },
  flex5_layout: {
    overflow: 'visible',
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 49,
    flexGrow: 1,
    marginRight: 49
  },
  flex5_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 35
  },
  flex6: {},
  flex6_layout: {
    overflow: 'visible',
    marginTop: 3.2,
    marginBottom: 4,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex6_row: {
    flexGrow: 0,
    flexShrink: 1
  },
  flex_layout3: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 8.78,
    flexGrow: 1,
    marginRight: 8.24
  },
  flex7_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 3.69
  },
  img: {
    resizeMode: 'contain'
  },
  img_layout: {
    marginTop: 4.4,
    height: 10.73,
    marginBottom: 0,
    marginLeft: 0,
    width: 3.69,
    minWidth: 3.69,
    marginRight: 0
  },
  img_layout1: {
    marginTop: 9.75,
    height: 5.38,
    marginBottom: 0,
    marginLeft: 0,
    width: 3.69,
    minWidth: 3.69,
    marginRight: 0
  },
  img_layout2: {
    marginTop: 0,
    height: 15.13,
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
  flex5_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 62
  },
  flex5_col1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 34
  },
  flex8: {},
  flex8_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 4,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex8_row: {
    flexGrow: 0,
    flexShrink: 1
  },
  icon_layout2: {
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
  flex5_space1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 48
  },
  flex5_col2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 42
  },
  flex9: {},
  flex9_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 3.2,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex9_row: {
    flexGrow: 0,
    flexShrink: 1
  },
  icon_layout3: {
    marginTop: 0,
    height: 21.24,
    marginBottom: 0,
    marginLeft: 10.69,
    width: 21.54,
    minWidth: 21.54,
    marginRight: 9.77
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
  flex5_space2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 49
  },
  flex5_col3: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 46
  },
  flex10: {},
  flex10_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 4,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 5
  },
  flex10_row: {
    flexGrow: 0,
    flexShrink: 1
  },
  icon_layout4: {
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
