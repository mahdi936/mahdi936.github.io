export interface Root {
  current: Current
  tolerance_low: ToleranceLow[]
  tolerance_high: ToleranceHigh[]
  last: Last[]
}

export interface Current {
  zinc: Zinc
  "yemen@kwd-sell": YemenKwdSell
  "xrp-irr": XrpIrr
  "xlm-irr": XlmIrr
  usd_afn_bid: UsdAfnBid
  "usdt-irr": UsdtIrr
  "usd-try-ask": UsdTryAsk
  "usd-sek-ask": UsdSekAsk
  "usd-sar-ask": UsdSarAsk
  "usd-nzd-ask": UsdNzdAsk
  "usd-krw-ask": UsdKrwAsk
  "usd-jpy-ask": UsdJpyAsk
  "usd-cny-ask": UsdCnyAsk
  "usd-chf-ask": UsdChfAsk
  "usd-cad-ask": UsdCadAsk
  silver_999: Silver999
  silver_925: Silver925
  silver: Silver
  sekee_real: SekeeReal
  sekee_down: SekeeDown
  sekee_dollar: SekeeDollar
  sekee_buy: SekeeBuy
  sekee: Sekee
  sekeb_buy: SekebBuy
  sekeb_blubber: SekebBlubber
  sekeb: Sekeb
  rob_down: RobDown
  rob_buy: RobBuy
  rob_blubber: RobBlubber
  rob: Rob
  retail_sekee: RetailSekee
  retail_sekeb: RetailSekeb
  retail_rob: RetailRob
  retail_nim: RetailNim
  retail_gerami: RetailGerami
  ratio_xau: RatioXau
  ratio_sp500: RatioSp500
  ratio_silver: RatioSilver
  ratio_platinum: RatioPlatinum
  ratio_palladium: RatioPalladium
  ratio_hui: RatioHui
  ratio_dija: RatioDija
  ratio_crudeoil: RatioCrudeoil
  price_zmw: PriceZmw
  price_zar: PriceZar
  price_yer: PriceYer
  price_xpf: PriceXpf
  price_xof: PriceXof
  price_xcd: PriceXcd
  price_xaf: PriceXaf
  price_vuv: PriceVuv
  price_vnd: PriceVnd
  price_vef: PriceVef
  price_uzs: PriceUzs
  price_uyu: PriceUyu
  price_ugx: PriceUgx
  price_uah: PriceUah
  price_tzs: PriceTzs
  price_twd: PriceTwd
  price_ttd: PriceTtd
  price_try: PriceTry
  price_tnd: PriceTnd
  price_tmt: PriceTmt
  price_tjs: PriceTjs
  price_thb: PriceThb
  price_szl: PriceSzl
  price_syp: PriceSyp
  price_svc: PriceSvc
  price_std: PriceStd
  price_sos: PriceSos
  price_sll: PriceSll
  price_skk: PriceSkk
  price_shp: PriceShp
  price_sgd: PriceSgd
  price_sek: PriceSek
  price_sdg: PriceSdg
  price_scr: PriceScr
  price_sar: PriceSar
  price_rwf: PriceRwf
  price_rub: PriceRub
  price_rsd: PriceRsd
  price_ron: PriceRon
  price_qar: PriceQar
  price_pyg: PricePyg
  price_pln: PricePln
  price_pkr: PricePkr
  price_php: PricePhp
  price_pgk: PricePgk
  price_pen: PricePen
  price_pab: PricePab
  price_omr: PriceOmr
  price_omg: PriceOmg
  price_nzd: PriceNzd
  price_npr: PriceNpr
  price_nok: PriceNok
  price_nio: PriceNio
  price_ngn: PriceNgn
  price_nad: PriceNad
  price_mzn: PriceMzn
  price_myr: PriceMyr
  price_mxn: PriceMxn
  price_mwk: PriceMwk
  price_mvr: PriceMvr
  price_mur: PriceMur
  price_mro: PriceMro
  price_mop: PriceMop
  price_mmk: PriceMmk
  price_mkd: PriceMkd
  price_mga: PriceMga
  price_mdl: PriceMdl
  price_mad: PriceMad
  price_lyd: PriceLyd
  price_lsl: PriceLsl
  price_lrd: PriceLrd
  price_lkr: PriceLkr
  price_lbp: PriceLbp
  price_lak: PriceLak
  price_kzt: PriceKzt
  price_kyd: PriceKyd
  price_kwd: PriceKwd
  price_krw: PriceKrw
  price_kmf: PriceKmf
  price_khr: PriceKhr
  price_kgs: PriceKgs
  price_kes: PriceKes
  price_jpy: PriceJpy
  price_jod: PriceJod
  price_jmd: PriceJmd
  price_isk: PriceIsk
  price_iqd: PriceIqd
  price_inr: PriceInr
  price_idr: PriceIdr
  price_huf: PriceHuf
  price_htg: PriceHtg
  price_hrk: PriceHrk
  price_hnl: PriceHnl
  price_hkd: PriceHkd
  price_gyd: PriceGyd
  price_gtq: PriceGtq
  price_gnt: PriceGnt
  price_gnf: PriceGnf
  price_gmd: PriceGmd
  price_ghs: PriceGhs
  price_gel: PriceGel
  price_gbp: PriceGbp
  price_fjd: PriceFjd
  price_eur_ex: PriceEurEx
  price_eur: PriceEur
  price_etc: PriceEtc
  price_etb: PriceEtb
  price_eos: PriceEos
  price_egp: PriceEgp
  price_dzd: PriceDzd
  price_dubai_dollar: PriceDubaiDollar
  price_dop: PriceDop
  price_dollar_sm: PriceDollarSm
  price_dollar_rl: PriceDollarRl
  price_dollar_future: PriceDollarFuture
  price_dollar_ex: PriceDollarEx
  price_dollar_dt: PriceDollarDt
  price_dollar_afshar_future: PriceDollarAfsharFuture
  price_dollar_afshar: PriceDollarAfshar
  price_dkk: PriceDkk
  price_djf: PriceDjf
  price_czk: PriceCzk
  price_cyp: PriceCyp
  price_cve: PriceCve
  price_cup: PriceCup
  price_crc: PriceCrc
  price_cop: PriceCop
  price_cny: PriceCny
  price_clp: PriceClp
  price_chf: PriceChf
  price_cdf: PriceCdf
  price_cad: PriceCad
  price_bzd: PriceBzd
  price_byn: PriceByn
  price_bwp: PriceBwp
  price_btn: PriceBtn
  price_bsd: PriceBsd
  price_brl: PriceBrl
  price_bnd: PriceBnd
  price_bmd: PriceBmd
  price_bif: PriceBif
  price_bhd: PriceBhd
  price_bgn: PriceBgn
  price_bdt: PriceBdt
  price_bch: PriceBch
  price_bbd: PriceBbd
  price_bam: PriceBam
  price_azn: PriceAzn
  price_awg: PriceAwg
  price_aud: PriceAud
  price_ars: PriceArs
  price_ang: PriceAng
  price_amd: PriceAmd
  price_all: PriceAll
  price_afn: PriceAfn
  price_aed: PriceAed
  platinum: Platinum
  palladium: Palladium
  ons_buy: OnsBuy
  ons: Ons
  oil_opec: OilOpec
  oil_brent: OilBrent
  oil: Oil
  nim_down: NimDown
  nim_buy: NimBuy
  nim_blubber: NimBlubber
  nim: Nim
  nickel: Nickel
  nasaac: Nasaac
  molybdenum: Molybdenum
  mesghal_buy: MesghalBuy
  mesghal: Mesghal
  lead: Lead
  irec_future: IrecFuture
  "indices-s-p-500": IndicesSP500
  "indices-nasdaq": IndicesNasdaq
  "indices-dow-jones": IndicesDowJones
  ice_usd: IceUsd
  ice_rub: IceRub
  ice_iqd: IceIqd
  ice_eur: IceEur
  gold_world_futures: GoldWorldFutures
  gold_mini_size: GoldMiniSize
  gold_melted_wholesale: GoldMeltedWholesale
  gold_melted_transfer: GoldMeltedTransfer
  gold_futures_buy: GoldFuturesBuy
  gold_futures: GoldFutures
  gold_checkout: GoldCheckout
  gold_740k: Gold740k
  gold_17_usd: Gold17Usd
  gold_17_transfer: Gold17Transfer
  gold_17_coin: Gold17Coin
  gold_17_aed: Gold17Aed
  gold_17: Gold17
  gerami_buy: GeramiBuy
  gerami_blubber: GeramiBlubber
  gerami: Gerami
  geram24_buy: Geram24Buy
  geram24: Geram24
  geram18_buy: Geram18Buy
  geram18: Geram18
  general_9: General9
  general_8: General8
  general_7: General7
  general_6: General6
  general_5: General5
  general_4: General4
  general_3: General3
  general_16: General16
  general_15: General15
  general_14: General14
  general_13: General13
  general_12: General12
  general_11: General11
  general_10: General10
  gc9: Gc9
  gc8: Gc8
  gc7: Gc7
  gc6: Gc6
  gc5: Gc5
  gc4: Gc4
  gc39: Gc39
  gc38: Gc38
  gc37: Gc37
  gc36: Gc36
  gc35: Gc35
  gc34: Gc34
  gc33: Gc33
  gc32: Gc32
  gc31: Gc31
  gc30: Gc30
  gc3: Gc3
  gc22: Gc22
  gc21: Gc21
  gc20: Gc20
  gc2: Gc2
  gc19: Gc19
  gc18: Gc18
  gc17: Gc17
  gc16: Gc16
  gc15: Gc15
  gc14: Gc14
  gc13: Gc13
  gc12: Gc12
  gc11: Gc11
  gc10: Gc10
  gc1: Gc1
  "gbp-usd-ask": GbpUsdAsk
  exusd_sell: ExusdSell
  exeur_sell: ExeurSell
  "exeur-sell": ExeurSell2
  "eur-usd-ask": EurUsdAsk
  "eth-irr": EthIrr
  "eos-irr": EosIrr
  diff_zar_usd: DiffZarUsd
  diff_usd_try: DiffUsdTry
  diff_usd_nzd: DiffUsdNzd
  diff_usd_krw: DiffUsdKrw
  diff_usd_jpy: DiffUsdJpy
  diff_usd_cny: DiffUsdCny
  diff_usd_chf: DiffUsdChf
  diff_usd_cad: DiffUsdCad
  diff_usd_azn: DiffUsdAzn
  diff_usd_aed: DiffUsdAed
  diff_twd_usd: DiffTwdUsd
  diff_try_usd: DiffTryUsd
  diff_sgd_usd: DiffSgdUsd
  diff_sek_usd: DiffSekUsd
  diff_sar_usd: DiffSarUsd
  diff_rub_usd: DiffRubUsd
  diff_nzd_usd: DiffNzdUsd
  diff_nok_usd: DiffNokUsd
  diff_mxn_usd: DiffMxnUsd
  diff_kwd_usd: DiffKwdUsd
  diff_krw_usd: DiffKrwUsd
  diff_jpy_usd: DiffJpyUsd
  diff_inr_usd: DiffInrUsd
  diff_hkd_usd: DiffHkdUsd
  diff_gbp_usd: DiffGbpUsd
  diff_eur_usd: DiffEurUsd
  diff_egp_usd: DiffEgpUsd
  diff_dkk_usd: DiffDkkUsd
  diff_cny_usd: DiffCnyUsd
  diff_chf_usd: DiffChfUsd
  diff_cad_usd: DiffCadUsd
  diff_btc_usd: DiffBtcUsd
  diff_brl_usd: DiffBrlUsd
  diff_aud_usd: DiffAudUsd
  diff_aed_usd: DiffAedUsd
  "dash-irr": DashIrr
  "crypto-zcash": CryptoZcash
  "crypto-waves": CryptoWaves
  "crypto-usd-coin-irr": CryptoUsdCoinIrr
  "crypto-usd-coin": CryptoUsdCoin
  "crypto-uniswap": CryptoUniswap
  "crypto-tron-irr": CryptoTronIrr
  "crypto-tron": CryptoTron
  "crypto-tezos": CryptoTezos
  "crypto-tether-irr": CryptoTetherIrr
  "crypto-tether": CryptoTether
  "crypto-stellar-irr": CryptoStellarIrr
  "crypto-stellar": CryptoStellar
  "crypto-solana-irr": CryptoSolanaIrr
  "crypto-solana": CryptoSolana
  "crypto-shiba-inu-irr": CryptoShibaInuIrr
  "crypto-shiba-inu": CryptoShibaInu
  "crypto-sandbox": CryptoSandbox
  "crypto-ripple-irr": CryptoRippleIrr
  "crypto-ripple": CryptoRipple
  "crypto-polkadot-irr": CryptoPolkadotIrr
  "crypto-polkadot": CryptoPolkadot
  "crypto-pancakeswap": CryptoPancakeswap
  "crypto-neo": CryptoNeo
  "crypto-nem": CryptoNem
  "crypto-monero-irr": CryptoMoneroIrr
  "crypto-monero": CryptoMonero
  "crypto-maker": CryptoMaker
  "crypto-loopring-irc": CryptoLoopringIrc
  "crypto-litecoin-irr": CryptoLitecoinIrr
  "crypto-litecoin": CryptoLitecoin
  "crypto-gala": CryptoGala
  "crypto-flow": CryptoFlow
  "crypto-filecoin": CryptoFilecoin
  "crypto-fantom": CryptoFantom
  "crypto-ethereum-irr": CryptoEthereumIrr
  "crypto-ethereum-classic": CryptoEthereumClassic
  "crypto-ethereum": CryptoEthereum
  "crypto-eos-irr": CryptoEosIrr
  "crypto-eos": CryptoEos
  "crypto-elrond": CryptoElrond
  "crypto-dogecoin-irr": CryptoDogecoinIrr
  "crypto-dogecoin": CryptoDogecoin
  "crypto-decred": CryptoDecred
  "crypto-dash-irr": CryptoDashIrr
  "crypto-dash": CryptoDash
  "crypto-cosmos": CryptoCosmos
  "crypto-chainlink-irr": CryptoChainlinkIrr
  "crypto-chainlink": CryptoChainlink
  "crypto-cashaa": CryptoCashaa
  "crypto-cardano-irr": CryptoCardanoIrr
  "crypto-cardano": CryptoCardano
  "crypto-bittorrent": CryptoBittorrent
  "crypto-bitcoin-irr": CryptoBitcoinIrr
  "crypto-bitcoin-cash-irr": CryptoBitcoinCashIrr
  "crypto-bitcoin-cash": CryptoBitcoinCash
  "crypto-bitcoin": CryptoBitcoin
  "crypto-binance-coin-irr": CryptoBinanceCoinIrr
  "crypto-binance-coin": CryptoBinanceCoin
  "crypto-avalanche-irr": CryptoAvalancheIrr
  "crypto-avalanche": CryptoAvalanche
  copperp: Copperp
  copper: Copper
  commodity_us_wheat: CommodityUsWheat
  commodity_us_sugar_no11: CommodityUsSugarNo11
  commodity_us_soybean_oil: CommodityUsSoybeanOil
  commodity_us_soybean_meal: CommodityUsSoybeanMeal
  commodity_us_soybeans: CommodityUsSoybeans
  commodity_us_cotton_no_2: CommodityUsCottonNo2
  commodity_us_corn: CommodityUsCorn
  commodity_us_coffee_c: CommodityUsCoffeeC
  commodity_us_cocoa: CommodityUsCocoa
  commodity_rough_rice: CommodityRoughRice
  commodity_orange_juice: CommodityOrangeJuice
  commodity_oats: CommodityOats
  commodity_lumber: CommodityLumber
  commodity_london_wheat: CommodityLondonWheat
  commodity_london_sugar: CommodityLondonSugar
  commodity_london_coffee: CommodityLondonCoffee
  commodity_london_cocoa: CommodityLondonCocoa
  commodity_live_cattle: CommodityLiveCattle
  commodity_feed_cattle: CommodityFeedCattle
  coin_future: CoinFuture
  coin_checkout: CoinCheckout
  coin_blubber: CoinBlubber
  cobalt: Cobalt
  "btc-irr": BtcIrr
  "bourse_stoxx-600": BourseStoxx600
  bourse_singapore: BourseSingapore
  "bourse_nikkei-225": BourseNikkei225
  bourse_globaldow: BourseGlobaldow
  "bourse_asia-dow": BourseAsiaDow
  bourse: Bourse
  base_global_zinc: BaseGlobalZinc
  base_global_tin: BaseGlobalTin
  base_global_nickel: BaseGlobalNickel
  base_global_lead: BaseGlobalLead
  base_global_copper2: BaseGlobalCopper2
  base_global_copper: BaseGlobalCopper
  "base-us-zinc": BaseUsZinc
  "base-us-uranium": BaseUsUranium
  "base-us-steel-coil": BaseUsSteelCoil
  "base-us-iron-ore": BaseUsIronOre
  "base-us-copper": BaseUsCopper
  "base-us-aluminum": BaseUsAluminum
  "aud-usd-ask": AudUsdAsk
  aluminium: Aluminium
  afn_usd_bid: AfnUsdBid
  afghan_usd: AfghanUsd
}

export interface Zinc {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface YemenKwdSell {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface XrpIrr {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface XlmIrr {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface UsdAfnBid {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface UsdtIrr {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface UsdTryAsk {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface UsdSekAsk {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface UsdSarAsk {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface UsdNzdAsk {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface UsdKrwAsk {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface UsdJpyAsk {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface UsdCnyAsk {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface UsdChfAsk {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface UsdCadAsk {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Silver999 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Silver925 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Silver {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface SekeeReal {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface SekeeDown {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface SekeeDollar {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface SekeeBuy {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Sekee {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface SekebBuy {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface SekebBlubber {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Sekeb {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface RobDown {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface RobBuy {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface RobBlubber {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Rob {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface RetailSekee {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface RetailSekeb {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface RetailRob {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface RetailNim {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface RetailGerami {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface RatioXau {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface RatioSp500 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface RatioSilver {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface RatioPlatinum {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface RatioPalladium {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface RatioHui {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface RatioDija {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface RatioCrudeoil {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceZmw {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceZar {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceYer {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceXpf {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceXof {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceXcd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceXaf {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceVuv {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceVnd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceVef {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceUzs {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceUyu {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceUgx {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceUah {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceTzs {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceTwd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceTtd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceTry {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceTnd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceTmt {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceTjs {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceThb {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceSzl {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceSyp {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceSvc {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceStd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceSos {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceSll {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceSkk {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceShp {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceSgd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceSek {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceSdg {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceScr {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceSar {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceRwf {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceRub {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceRsd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceRon {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceQar {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PricePyg {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PricePln {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PricePkr {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PricePhp {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PricePgk {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PricePen {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PricePab {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceOmr {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceOmg {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceNzd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceNpr {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceNok {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceNio {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceNgn {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceNad {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceMzn {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceMyr {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceMxn {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceMwk {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceMvr {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceMur {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceMro {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceMop {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceMmk {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceMkd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceMga {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceMdl {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceMad {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceLyd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceLsl {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceLrd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceLkr {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceLbp {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceLak {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceKzt {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceKyd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceKwd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceKrw {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceKmf {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceKhr {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceKgs {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceKes {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceJpy {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceJod {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceJmd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceIsk {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceIqd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceInr {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceIdr {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceHuf {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceHtg {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceHrk {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceHnl {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceHkd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceGyd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceGtq {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceGnt {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceGnf {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceGmd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceGhs {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceGel {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceGbp {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceFjd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceEurEx {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceEur {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceEtc {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceEtb {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceEos {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceEgp {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceDzd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceDubaiDollar {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceDop {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceDollarSm {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceDollarRl {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceDollarFuture {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceDollarEx {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceDollarDt {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceDollarAfsharFuture {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceDollarAfshar {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceDkk {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceDjf {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceCzk {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceCyp {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceCve {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceCup {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceCrc {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceCop {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceCny {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceClp {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceChf {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceCdf {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceCad {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceBzd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceByn {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceBwp {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceBtn {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceBsd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceBrl {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceBnd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceBmd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceBif {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceBhd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceBgn {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceBdt {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceBch {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceBbd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceBam {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceAzn {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceAwg {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceAud {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceArs {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceAng {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceAmd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceAll {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceAfn {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface PriceAed {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Platinum {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Palladium {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface OnsBuy {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Ons {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface OilOpec {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface OilBrent {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Oil {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface NimDown {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface NimBuy {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface NimBlubber {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Nim {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Nickel {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Nasaac {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Molybdenum {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface MesghalBuy {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Mesghal {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Lead {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface IrecFuture {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface IndicesSP500 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface IndicesNasdaq {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface IndicesDowJones {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface IceUsd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface IceRub {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface IceIqd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface IceEur {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface GoldWorldFutures {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface GoldMiniSize {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface GoldMeltedWholesale {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface GoldMeltedTransfer {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface GoldFuturesBuy {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface GoldFutures {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface GoldCheckout {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Gold740k {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Gold17Usd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Gold17Transfer {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Gold17Coin {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Gold17Aed {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Gold17 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface GeramiBuy {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface GeramiBlubber {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Gerami {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Geram24Buy {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Geram24 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Geram18Buy {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Geram18 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface General9 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface General8 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface General7 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface General6 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface General5 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface General4 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface General3 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface General16 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface General15 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface General14 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface General13 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface General12 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface General11 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface General10 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Gc9 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Gc8 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Gc7 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Gc6 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Gc5 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Gc4 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Gc39 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Gc38 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Gc37 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Gc36 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Gc35 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Gc34 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Gc33 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Gc32 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Gc31 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Gc30 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Gc3 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Gc22 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Gc21 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Gc20 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Gc2 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Gc19 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Gc18 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Gc17 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Gc16 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Gc15 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Gc14 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Gc13 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Gc12 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Gc11 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Gc10 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Gc1 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface GbpUsdAsk {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface ExusdSell {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface ExeurSell {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface ExeurSell2 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface EurUsdAsk {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface EthIrr {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface EosIrr {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface DiffZarUsd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface DiffUsdTry {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface DiffUsdNzd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface DiffUsdKrw {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface DiffUsdJpy {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface DiffUsdCny {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface DiffUsdChf {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface DiffUsdCad {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface DiffUsdAzn {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface DiffUsdAed {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface DiffTwdUsd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface DiffTryUsd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface DiffSgdUsd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface DiffSekUsd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface DiffSarUsd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface DiffRubUsd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface DiffNzdUsd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface DiffNokUsd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface DiffMxnUsd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface DiffKwdUsd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface DiffKrwUsd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface DiffJpyUsd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface DiffInrUsd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface DiffHkdUsd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface DiffGbpUsd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface DiffEurUsd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface DiffEgpUsd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface DiffDkkUsd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface DiffCnyUsd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface DiffChfUsd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface DiffCadUsd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface DiffBtcUsd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface DiffBrlUsd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface DiffAudUsd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface DiffAedUsd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface DashIrr {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoZcash {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoWaves {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoUsdCoinIrr {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoUsdCoin {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoUniswap {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoTronIrr {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoTron {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoTezos {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoTetherIrr {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoTether {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoStellarIrr {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoStellar {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoSolanaIrr {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoSolana {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoShibaInuIrr {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoShibaInu {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoSandbox {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoRippleIrr {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoRipple {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoPolkadotIrr {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoPolkadot {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoPancakeswap {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoNeo {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoNem {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoMoneroIrr {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoMonero {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoMaker {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoLoopringIrc {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoLitecoinIrr {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoLitecoin {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoGala {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoFlow {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoFilecoin {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoFantom {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoEthereumIrr {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoEthereumClassic {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoEthereum {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoEosIrr {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoEos {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoElrond {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoDogecoinIrr {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoDogecoin {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoDecred {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoDashIrr {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoDash {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoCosmos {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoChainlinkIrr {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoChainlink {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoCashaa {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoCardanoIrr {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoCardano {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoBittorrent {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoBitcoinIrr {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoBitcoinCashIrr {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoBitcoinCash {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoBitcoin {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoBinanceCoinIrr {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoBinanceCoin {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoAvalancheIrr {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CryptoAvalanche {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Copperp {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Copper {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CommodityUsWheat {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CommodityUsSugarNo11 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CommodityUsSoybeanOil {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CommodityUsSoybeanMeal {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CommodityUsSoybeans {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CommodityUsCottonNo2 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CommodityUsCorn {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CommodityUsCoffeeC {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CommodityUsCocoa {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CommodityRoughRice {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CommodityOrangeJuice {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CommodityOats {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CommodityLumber {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CommodityLondonWheat {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CommodityLondonSugar {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CommodityLondonCoffee {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CommodityLondonCocoa {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CommodityLiveCattle {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CommodityFeedCattle {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CoinFuture {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CoinCheckout {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface CoinBlubber {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Cobalt {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface BtcIrr {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface BourseStoxx600 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface BourseSingapore {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface BourseNikkei225 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface BourseGlobaldow {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface BourseAsiaDow {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Bourse {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface BaseGlobalZinc {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface BaseGlobalTin {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface BaseGlobalNickel {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface BaseGlobalLead {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface BaseGlobalCopper2 {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface BaseGlobalCopper {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface BaseUsZinc {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface BaseUsUranium {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface BaseUsSteelCoil {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface BaseUsIronOre {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface BaseUsCopper {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface BaseUsAluminum {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface AudUsdAsk {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface Aluminium {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface AfnUsdBid {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface AfghanUsd {
  p: string
  h: string
  l: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  "t-g": string
  ts: string
}

export interface ToleranceLow {
  name: string
  item_id: number
  slug: string
  p: string
  h: string
  l: string
  o: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  created_at: string
  title: string
  title_en: string
  "php:first-price": string
}

export interface ToleranceHigh {
  name: string
  item_id: number
  slug: string
  p: string
  h: string
  l: string
  o: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  created_at: string
  title: string
  title_en: string
  "php:first-price": string
}

export interface Last {
  name: string
  item_id: number
  slug: string
  p: string
  h: string
  l: string
  o: string
  d: string
  dp: number
  dt: string
  t: string
  t_en: string
  created_at: string
  title: string
  title_en: string
  "php:first-price": string
}
