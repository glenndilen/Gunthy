{
    "pairs": {
        "huobi": {
            
            "BTC-ETH": {
                "enabled": true,
                "strategy": "gain",
                "override": {
                    "BUY_METHOD": "gain",
                    "BUY_ENABLED": true,
                    "SELL_METHOD": "gain",
                    "SELL_ENABLED": true,
                    "TRADING_LIMIT": 0.001,
                    "MIN_VOLUME_TO_BUY": 0.001,
                    "MIN_VOLUME_TO_SELL": 0.001,
                    "IGNORE_TRADES_BEFORE": 0,
                    "TRADING_FEES": 0.25,
                    "FUNDS_RESERVE": 0.0001
                }
            }
        }
    },
    "strategies": {
        "gain": {
            "BUY_LEVEL": 1,
            "GAIN": 0.1,

            "HIGH_BB": 45,
            "LOW_BB": 45,

            "PERIOD": 15,
            "EMA1": 16,
            "EMA2": 8,
            "STDV": 2,
            "SMAPERIOD": 50,
            "SLOW_SMA": 2,
            "FAST_SMA": 1,
            "MACD_SHORT": 12,
            "MACD_LONG": 26,
            "MACD_SIGNAL": 9,
            "STOCH_ENABLED": false,
            "STOCH_BUY_LEVEL": 20,
            "STOCH_SELL_LEVEL": 80,
            "STOCH_K": 14,
            "SLOW_STOCH_K": 3,
            "STOCH_D": 3,
            "DI_PERIOD": 14,
            "EMASPREAD": false,
            "EMAx": 0.5,
            "ADX_LEVEL": 25,
            "ADX_ENABLED": false,
            "RSI_BUY_ENABLED": false,
            "RSI_SELL_ENABLED": false,
            "RSI_BUY_LEVEL": 30,
            "RSI_SELL_LEVEL": 70,
            "RSI_LENGTH": 14,
            "RSI_METHOD": "cross",
            "STOCH_METHOD": "cross",
            "MFI_ENABLED": false,
            "MFI_SELL_LEVEL": 30,
            "MFI_BUY_LEVEL": 70,
            "ATRX": 3,
            "ATR_PERIOD": 14,
            "BTC_PND_PROTECTION": false,
            "BTC_MONEY_FLOW": 35,

            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "DU_CAP_COUNT": 0,
            "DU_METHOD": "HIGHBB",
            "DU_BUYDOWN": 2,
            "RSI_DU_BUY": 30,
            
            "RT_ENABLED": true,
            "RT_MAXBAG_PROTECTION": 10,
            "RT_SELL_UP": 0.1,
            "RT_TREND_ENABLED": true,
            "RT_BUY_LEVEL": 0.8,
            "RT_GAIN": 0.1,
            
            "TRAIL_ME_BUY": false,
            "TRAIL_ME_SELL": false,
            "TRAIL_ME_DU": false,
            "TM_RT_SELL": false,
            "TRAIL_ME_RT": false,
            "TRAIL_ME_SELL_RANGE": 0.5,
            "TRAIL_ME_BUY_RANGE": 0.5,
            "TRAIL_ME_RT_SELL_RANGE": 0.5,

            "PANIC_SELL": false,
            "STOP_LIMIT": 61,
            "TRADES_TIMEOUT": 0
        },
        "bb": {
            "BUY_LEVEL": 0.1,
            "GAIN": 0.1,
            "HIGH_BB": 45,
            "LOW_BB": 45,

            "PERIOD": 15,
            "EMA1": 16,
            "EMA2": 8,
            "STDV": 2,
            "SMAPERIOD": 50,
            "SLOW_SMA": 2,
            "FAST_SMA": 1,
            "MACD_SHORT": 12,
            "MACD_LONG": 26,
            "MACD_SIGNAL": 9,
            "STOCH_ENABLED": false,
            "STOCH_BUY_LEVEL": 20,
            "STOCH_SELL_LEVEL": 80,
            "STOCH_K": 14,
            "SLOW_STOCH_K": 3,
            "STOCH_D": 3,
            "DI_PERIOD": 14,
            "EMASPREAD": false,
            "ADX_LEVEL": 25,
            "ADX_ENABLED": false,
            "RSI_BUY_ENABLED": false,
            "RSI_SELL_ENABLED": false,
            "RSI_BUY_LEVEL": 30,
            "RSI_SELL_LEVEL": 70,
            "RSI_LENGTH": 14,
            "MFI_ENABLED": false,
            "MFI_SELL_LEVEL": 30,
            "MFI_BUY_LEVEL": 70,
            "KUMO_SENTIMENTS": true,
            "ATRX": 3,
            "ATR_PERIOD": 14,
            "BTC_PND_PROTECTION": false,
            "BTC_MONEY_FLOW": 35,

            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "DU_CAP_COUNT": 0,
            "DU_METHOD": "HIGHBB",
            "DU_BUYDOWN": 2,
            "RSI_DU_BUY": 30,
            
            "RT_ENABLED": true,
            "RT_MAXBAG_PROTECTION": 10,
            "RT_SELL_BUYDOWN": 1,
            "RT_SELL_UP": 0.1,
            "RT_TREND_ENABLED": true,
            "RT_BUY_LEVEL": 0.8,
            "RT_GAIN": 0.1,
            
            "TRAIL_ME_BUY": false,
            "TRAIL_ME_SELL": false,
            "TRAIL_ME_DU": false,
            "TM_RT_SELL": false,
            "TRAIL_ME_RT": false,
            "TRAIL_ME_SELL_RANGE": 0.5,
            "TRAIL_ME_BUY_RANGE": 0.5,
            "TRAIL_ME_RT_SELL_RANGE": 0.5,

            "PANIC_SELL": false,
            "STOP_LIMIT": 61,
            "TRADES_TIMEOUT": 0
        },
        "stepgain": {
            "BUY_LEVEL": 0.1,
            "BUYLVL1": 0.6,
            "BUYLVL2": 2,
            "BUYLVL3": 70,
            "BUYLVL": 1,
            "GAIN": 0.1,
            "SELLLVL1": 0.6,
            "SELLLVL2": 2,
            "SELLLVL3": 70,
            "SELLLVL": 1,
            
            "HIGH_BB": 45,
            "LOW_BB": 45,
            "PERIOD": 15,
            "EMA1": 16,
            "EMA2": 8,
            "STDV": 2,
            "SMAPERIOD": 50,
            "SLOW_SMA": 2,
            "FAST_SMA": 1,
            "MACD_SHORT": 12,
            "MACD_LONG": 26,
            "MACD_SIGNAL": 9,
            "STOCH_ENABLED": false,
            "STOCH_BUY_LEVEL": 20,
            "STOCH_SELL_LEVEL": 80,
            "STOCH_K": 14,
            "SLOW_STOCH_K": 3,
            "STOCH_D": 3,
            "DI_PERIOD": 14,
            "EMASPREAD": false,
            "ADX_LEVEL": 25,
            "ADX_ENABLED": false,
            "RSI_BUY_ENABLED": false,
            "RSI_SELL_ENABLED": false,
            "RSI_BUY_LEVEL": 30,
            "RSI_SELL_LEVEL": 70,
            "RSI_LENGTH": 14,
            "MFI_ENABLED": false,
            "MFI_SELL_LEVEL": 30,
            "MFI_BUY_LEVEL": 70,
            "KUMO_SENTIMENTS": true,
            "ATRX": 3,
            "ATR_PERIOD": 14,
            "BTC_PND_PROTECTION": false,
            "BTC_MONEY_FLOW": 35,

            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "DU_CAP_COUNT": 0,
            "DU_METHOD": "HIGHBB",
            "DU_BUYDOWN": 2,
            "RSI_DU_BUY": 30,
            
            "RT_ENABLED": true,
            "RT_MAXBAG_PROTECTION": 10,
            "RT_SELL_BUYDOWN": 1,
            "RT_SELL_UP": 0.1,
            "RT_TREND_ENABLED": true,
            "RT_BUY_LEVEL": 0.8,
            "RT_BUYLVL1": 0.6,
            "RT_BUYLVL2": 2,
            "RT_BUYLVL3": 70,
            "RT_BUYLVL": 1,
            "RT_GAIN": 0.1,
            "RT_SELLLVL1": 0.6,
            "RT_SELLLVL2": 2,
            "RT_SELLLVL3": 70,
            "RT_SELLLVL": 1,

            "TRAIL_ME_BUY": false,
            "TRAIL_ME_SELL": false,
            "TRAIL_ME_DU": false,
            "TM_RT_SELL": false,
            "TRAIL_ME_RT": false,
            "TRAIL_ME_SELL_RANGE": 0.5,
            "TRAIL_ME_BUY_RANGE": 0.5,
            "TRAIL_ME_RT_SELL_RANGE": 0.5,

            "PANIC_SELL": false,
            "STOP_LIMIT": 61,
            "TRADES_TIMEOUT": 0

        },
        "tssl": {
            "BUY_LEVEL": 0.1,
            "BUY_RANGE": 0.1,
            "GAIN": 0.1,
            "SELL_RANGE": 0.1,
            "TSSL_TARGET_ONLY": true,

            "HIGH_BB": 45,
            "LOW_BB": 45,
            "PERIOD": 15,
            "EMA1": 16,
            "EMA2": 8,
            "STDV": 2,
            "SMAPERIOD": 50,
            "SLOW_SMA": 2,
            "FAST_SMA": 1,
            "MACD_SHORT": 12,
            "MACD_LONG": 26,
            "MACD_SIGNAL": 9,
            "STOCH_ENABLED": false,
            "STOCH_BUY_LEVEL": 20,
            "STOCH_SELL_LEVEL": 80,
            "STOCH_K": 14,
            "SLOW_STOCH_K": 3,
            "STOCH_D": 3,
            "DI_PERIOD": 14,
            "EMASPREAD": false,
            "ADX_LEVEL": 25,
            "ADX_ENABLED": false,
            "RSI_BUY_ENABLED": false,
            "RSI_SELL_ENABLED": false,
            "RSI_BUY_LEVEL": 30,
            "RSI_SELL_LEVEL": 70,
            "RSI_LENGTH": 14,
            "MFI_ENABLED": false,
            "MFI_SELL_LEVEL": 30,
            "MFI_BUY_LEVEL": 70,
            "KUMO_SENTIMENTS": true,
            "ATRX": 3,
            "ATR_PERIOD": 14,
            "BTC_PND_PROTECTION": false,
            "BTC_MONEY_FLOW": 35,

            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "DU_CAP_COUNT": 0,
            "DU_METHOD": "HIGHBB",
            "DU_BUYDOWN": 2,
            "RSI_DU_BUY": 30,
            
            "RT_ENABLED": true,
            "RT_MAXBAG_PROTECTION": 10,
            "RT_SELL_BUYDOWN": 1,
            "RT_SELL_UP": 0.1,
            "RT_TREND_ENABLED": true,
            "RT_BUY_LEVEL": 0.8,
            "RT_GAIN": 0.1,
            
            "TRAIL_ME_BUY": false,
            "TRAIL_ME_SELL": false,
            "TRAIL_ME_DU": false,
            "TM_RT_SELL": false,
            "TRAIL_ME_RT": false,
            "TRAIL_ME_SELL_RANGE": 0.5,
            "TRAIL_ME_BUY_RANGE": 0.5,
            "TRAIL_ME_RT_SELL_RANGE": 0.5,

            "PANIC_SELL": false,
            "STOP_LIMIT": 61,
            "TRADES_TIMEOUT": 0
        },
        "pp": {
            "PP_BUY": 0,
            "PP_SELL": 99999,

            "HIGH_BB": 45,
            "LOW_BB": 45,
            "PERIOD": 15,
            "EMA1": 16,
            "EMA2": 8,
            "STDV": 2,
            "SMAPERIOD": 50,
            "SLOW_SMA": 2,
            "FAST_SMA": 1,
            "MACD_SHORT": 12,
            "MACD_LONG": 26,
            "MACD_SIGNAL": 9,
            "STOCH_ENABLED": false,
            "STOCH_BUY_LEVEL": 20,
            "STOCH_SELL_LEVEL": 80,
            "STOCH_K": 14,
            "SLOW_STOCH_K": 3,
            "STOCH_D": 3,
            "DI_PERIOD": 14,
            "EMASPREAD": false,
            "ADX_LEVEL": 25,
            "ADX_ENABLED": false,
            "RSI_BUY_ENABLED": false,
            "RSI_SELL_ENABLED": false,
            "RSI_BUY_LEVEL": 30,
            "RSI_SELL_LEVEL": 70,
            "RSI_LENGTH": 14,
            "MFI_ENABLED": false,
            "MFI_SELL_LEVEL": 30,
            "MFI_BUY_LEVEL": 70,
            "KUMO_SENTIMENTS": true,
            "ATRX": 3,
            "ATR_PERIOD": 14,
            "BTC_PND_PROTECTION": false,
            "BTC_MONEY_FLOW": 35,

            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "DU_CAP_COUNT": 0,
            "DU_METHOD": "HIGHBB",
            "DU_BUYDOWN": 2,
            "RSI_DU_BUY": 30,
            
            "RT_ENABLED": true,
            "RT_MAXBAG_PROTECTION": 10,
            "RT_SELL_BUYDOWN": 1,
            "RT_SELL_UP": 0.1,
            "RT_TREND_ENABLED": true,
            "RT_BUY_LEVEL": 0.8,
            "RT_GAIN": 0.1,
            
            "TRAIL_ME_BUY": false,
            "TRAIL_ME_SELL": false,
            "TRAIL_ME_DU": false,
            "TM_RT_SELL": false,
            "TRAIL_ME_RT": false,
            "TRAIL_ME_SELL_RANGE": 0.5,
            "TRAIL_ME_BUY_RANGE": 0.5,
            "TRAIL_ME_RT_SELL_RANGE": 0.5,

            "PANIC_SELL": false,
            "STOP_LIMIT": 61,
            "TRADES_TIMEOUT": 0
        },
        "tsa": {
            "HIGH_BB": 45,
            "LOW_BB": 45,
            "PERIOD": 15,
            "EMA1": 16,
            "EMA2": 8,
            "STDV": 2,
            "SMAPERIOD": 50,
            "SLOW_SMA": 2,
            "FAST_SMA": 1,
            "MACD_SHORT": 12,
            "MACD_LONG": 26,
            "MACD_SIGNAL": 9,
            "STOCH_ENABLED": false,
            "STOCH_BUY_LEVEL": 20,
            "STOCH_SELL_LEVEL": 80,
            "STOCH_K": 14,
            "SLOW_STOCH_K": 3,
            "STOCH_D": 3,
            "DI_PERIOD": 14,
            "EMASPREAD": false,
            "ADX_LEVEL": 25,
            "ADX_ENABLED": false,
            "RSI_BUY_ENABLED": false,
            "RSI_SELL_ENABLED": false,
            "RSI_BUY_LEVEL": 30,
            "RSI_SELL_LEVEL": 70,
            "RSI_LENGTH": 14,
            "MFI_ENABLED": false,
            "MFI_SELL_LEVEL": 30,
            "MFI_BUY_LEVEL": 70,
            "KUMO_SENTIMENTS": true,
            "ATRX": 3,
            "ATR_PERIOD": 14,
            "BTC_PND_PROTECTION": false,
            "BTC_MONEY_FLOW": 35,

            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "DU_CAP_COUNT": 0,
            "DU_METHOD": "HIGHBB",
            "DU_BUYDOWN": 2,
            "RSI_DU_BUY": 30,
            
            "RT_ENABLED": true,
            "RT_MAXBAG_PROTECTION": 10,
            "RT_SELL_BUYDOWN": 1,
            "RT_SELL_UP": 0.1,
            "RT_TREND_ENABLED": true,
            "RT_BUY_LEVEL": 0.8,
            "RT_GAIN": 0.1,

            "TRAIL_ME_BUY": false,
            "TRAIL_ME_SELL": false,
            "TRAIL_ME_DU": false,
            "TM_RT_SELL": false,
            "TRAIL_ME_RT": false,
            "TRAIL_ME_SELL_RANGE": 0.5,
            "TRAIL_ME_BUY_RANGE": 0.5,
            "TRAIL_ME_RT_SELL_RANGE": 0.5,

            "PANIC_SELL": false,
            "STOP_LIMIT": 61,
            "TRADES_TIMEOUT": 0
        },
        "BBTA": {
            "BUY_LEVEL": 0.1,
            "GAIN": 0.1,
            "HIGH_BB": 45,
            "LOW_BB": 45,

            "PERIOD": 15,
            "EMA1": 16,
            "EMA2": 8,
            "STDV": 2,
            "SMAPERIOD": 50,
            "SLOW_SMA": 2,
            "FAST_SMA": 1,
            "MACD_SHORT": 12,
            "MACD_LONG": 26,
            "MACD_SIGNAL": 9,
            "STOCH_ENABLED": false,
            "STOCH_BUY_LEVEL": 20,
            "STOCH_SELL_LEVEL": 80,
            "STOCH_K": 14,
            "SLOW_STOCH_K": 3,
            "STOCH_D": 3,
            "DI_PERIOD": 14,
            "EMASPREAD": false,
            "ADX_LEVEL": 25,
            "ADX_ENABLED": false,
            "RSI_BUY_ENABLED": false,
            "RSI_SELL_ENABLED": false,
            "RSI_BUY_LEVEL": 30,
            "RSI_SELL_LEVEL": 70,
            "RSI_LENGTH": 14,
            "MFI_ENABLED": false,
            "MFI_SELL_LEVEL": 30,
            "MFI_BUY_LEVEL": 70,
            "KUMO_SENTIMENTS": true,
            "ATRX": 3,
            "ATR_PERIOD": 14,
            "BTC_PND_PROTECTION": false,
            "BTC_MONEY_FLOW": 35,

            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "DU_CAP_COUNT": 0,
            "DU_METHOD": "HIGHBB",
            "DU_BUYDOWN": 2,
            "RSI_DU_BUY": 30,
            
            "RT_ENABLED": true,
            "RT_MAXBAG_PROTECTION": 10,
            "RT_SELL_BUYDOWN": 1,
            "RT_SELL_UP": 0.1,
            "RT_TREND_ENABLED": true,
            "RT_BUY_LEVEL": 0.8,
            "RT_GAIN": 0.1,
            
            "TRAIL_ME_BUY": false,
            "TRAIL_ME_SELL": false,
            "TRAIL_ME_DU": false,
            "TM_RT_SELL": false,
            "TRAIL_ME_RT": false,
            "TRAIL_ME_SELL_RANGE": 0.5,
            "TRAIL_ME_BUY_RANGE": 0.5,
            "TRAIL_ME_RT_SELL_RANGE": 0.5,

            "PANIC_SELL": false,
            "STOP_LIMIT": 61,
            "TRADES_TIMEOUT": 0
        },
        "SMACROSS": {
            "HIGH_BB": 45,
            "LOW_BB": 45,

            "PERIOD": 15,
            "EMA1": 16,
            "EMA2": 8,
            "STDV": 2,
            "SMAPERIOD": 50,
            "SLOW_SMA": 2,
            "FAST_SMA": 1,
            "MACD_SHORT": 12,
            "MACD_LONG": 26,
            "MACD_SIGNAL": 9,
            "STOCH_ENABLED": false,
            "STOCH_BUY_LEVEL": 20,
            "STOCH_SELL_LEVEL": 80,
            "STOCH_K": 14,
            "SLOW_STOCH_K": 3,
            "STOCH_D": 3,
            "DI_PERIOD": 14,
            "EMASPREAD": false,
            "ADX_LEVEL": 25,
            "ADX_ENABLED": false,
            "RSI_BUY_ENABLED": false,
            "RSI_SELL_ENABLED": false,
            "RSI_BUY_LEVEL": 30,
            "RSI_SELL_LEVEL": 70,
            "RSI_LENGTH": 14,
            "MFI_ENABLED": false,
            "MFI_SELL_LEVEL": 30,
            "MFI_BUY_LEVEL": 70,
            "ATRX": 3,
            "ATR_PERIOD": 14,
            "BTC_PND_PROTECTION": false,
            "BTC_MONEY_FLOW": 35,

            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "DU_CAP_COUNT": 0,
            "DU_METHOD": "HIGHBB",
            "DU_BUYDOWN": 2,
            "RSI_DU_BUY": 30,
            
            "RT_ENABLED": true,
            "RT_MAXBAG_PROTECTION": 10,
            "RT_SELL_BUYDOWN": 1,
            "RT_SELL_UP": 0.1,
            "RT_TREND_ENABLED": true,
            "RT_BUY_LEVEL": 0.8,
            "RT_GAIN": 0.1,

            "TRAIL_ME_BUY": false,
            "TRAIL_ME_SELL": false,
            "TRAIL_ME_DU": false,
            "TM_RT_SELL": false,
            "TRAIL_ME_RT": false,
            "TRAIL_ME_SELL_RANGE": 0.5,
            "TRAIL_ME_BUY_RANGE": 0.5,
            "TRAIL_ME_RT_SELL_RANGE": 0.5,

            "PANIC_SELL": false,
            "STOP_LIMIT": 61,
            "TRADES_TIMEOUT": 0
        },
        "MACD": {
            "HIGH_BB": 45,
            "LOW_BB": 45,
            "PERIOD": 15,
            "EMA1": 16,
            "EMA2": 8,
            "STDV": 2,
            "SMAPERIOD": 50,
            "SLOW_SMA": 2,
            "FAST_SMA": 1,
            "MACD_SHORT": 12,
            "MACD_LONG": 26,
            "MACD_SIGNAL": 9,
            "STOCH_ENABLED": false,
            "STOCH_BUY_LEVEL": 20,
            "STOCH_SELL_LEVEL": 80,
            "STOCH_K": 14,
            "SLOW_STOCH_K": 3,
            "STOCH_D": 3,
            "DI_PERIOD": 14,
            "EMASPREAD": false,
            "ADX_LEVEL": 25,
            "ADX_ENABLED": false,
            "RSI_BUY_ENABLED": false,
            "RSI_SELL_ENABLED": false,
            "RSI_BUY_LEVEL": 30,
            "RSI_SELL_LEVEL": 70,
            "RSI_LENGTH": 14,
            "MFI_ENABLED": false,
            "MFI_SELL_LEVEL": 30,
            "MFI_BUY_LEVEL": 70,
            "KUMO_SENTIMENTS": true,
            "ATRX": 3,
            "ATR_PERIOD": 14,
            "BTC_PND_PROTECTION": false,
            "BTC_MONEY_FLOW": 35,

            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "DU_CAP_COUNT": 0,
            "DU_METHOD": "HIGHBB",
            "DU_BUYDOWN": 2,
            "RSI_DU_BUY": 30,
            
            "RT_ENABLED": true,
            "RT_MAXBAG_PROTECTION": 10,
            "RT_SELL_BUYDOWN": 1,
            "RT_SELL_UP": 0.1,
            "RT_TREND_ENABLED": true,
            "RT_BUY_LEVEL": 0.8,
            "RT_GAIN": 0.1,

            "TRAIL_ME_BUY": false,
            "TRAIL_ME_SELL": false,
            "TRAIL_ME_DU": false,
            "TM_RT_SELL": false,
            "TRAIL_ME_RT": false,
            "TRAIL_ME_SELL_RANGE": 0.5,
            "TRAIL_ME_BUY_RANGE": 0.5,
            "TRAIL_ME_RT_SELL_RANGE": 0.5,

            "PANIC_SELL": false,
            "STOP_LIMIT": 61,
            "TRADES_TIMEOUT": 0
        },
        "MACDH": {
            "HIGH_BB": 45,
            "LOW_BB": 45,
            "PERIOD": 15,
            "EMA1": 16,
            "EMA2": 8,
            "STDV": 2,
            "SMAPERIOD": 50,
            "SLOW_SMA": 2,
            "FAST_SMA": 1,
            "MACD_SHORT": 12,
            "MACD_LONG": 26,
            "MACD_SIGNAL": 9,
            "STOCH_ENABLED": false,
            "STOCH_BUY_LEVEL": 20,
            "STOCH_SELL_LEVEL": 80,
            "STOCH_K": 14,
            "SLOW_STOCH_K": 3,
            "STOCH_D": 3,
            "DI_PERIOD": 14,
            "EMASPREAD": false,
            "ADX_LEVEL": 25,
            "ADX_ENABLED": false,
            "RSI_BUY_ENABLED": false,
            "RSI_SELL_ENABLED": false,
            "RSI_BUY_LEVEL": 30,
            "RSI_SELL_LEVEL": 70,
            "RSI_LENGTH": 14,
            "MFI_ENABLED": false,
            "MFI_SELL_LEVEL": 30,
            "MFI_BUY_LEVEL": 70,
            "KUMO_SENTIMENTS": true,
            "ATRX": 3,
            "ATR_PERIOD": 14,
            "BTC_PND_PROTECTION": false,
            "BTC_MONEY_FLOW": 35,

            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "DU_CAP_COUNT": 0,
            "DU_METHOD": "HIGHBB",
            "DU_BUYDOWN": 2,
            "RSI_DU_BUY": 30,
            
            "RT_ENABLED": true,
            "RT_MAXBAG_PROTECTION": 10,
            "RT_SELL_BUYDOWN": 1,
            "RT_SELL_UP": 0.1,
            "RT_TREND_ENABLED": true,
            "RT_BUY_LEVEL": 0.8,
            "RT_GAIN": 0.1,

            "TRAIL_ME_BUY": false,
            "TRAIL_ME_SELL": false,
            "TRAIL_ME_DU": false,
            "TM_RT_SELL": false,
            "TRAIL_ME_RT": false,
            "TRAIL_ME_SELL_RANGE": 0.5,
            "TRAIL_ME_BUY_RANGE": 0.5,
            "TRAIL_ME_RT_SELL_RANGE": 0.5,

            "PANIC_SELL": false,
            "STOP_LIMIT": 61,
            "TRADES_TIMEOUT": 0
        },
        "ADX": {
            "HIGH_BB": 45,
            "LOW_BB": 45,
            "PERIOD": 15,
            "EMA1": 16,
            "EMA2": 8,
            "STDV": 2,
            "SMAPERIOD": 50,
            "SLOW_SMA": 2,
            "FAST_SMA": 1,
            "MACD_SHORT": 12,
            "MACD_LONG": 26,
            "MACD_SIGNAL": 9,
            "STOCH_ENABLED": false,
            "STOCH_BUY_LEVEL": 20,
            "STOCH_SELL_LEVEL": 80,
            "STOCH_K": 14,
            "SLOW_STOCH_K": 3,
            "STOCH_D": 3,
            "DI_PERIOD": 14,
            "EMASPREAD": false,
            "ADX_LEVEL": 25,
            "ADX_ENABLED": false,
            "RSI_BUY_ENABLED": false,
            "RSI_SELL_ENABLED": false,
            "RSI_BUY_LEVEL": 30,
            "RSI_SELL_LEVEL": 70,
            "RSI_LENGTH": 14,
            "MFI_ENABLED": false,
            "MFI_SELL_LEVEL": 30,
            "MFI_BUY_LEVEL": 70,
            "KUMO_SENTIMENTS": true,
            "ATRX": 3,
            "ATR_PERIOD": 14,
            "BTC_PND_PROTECTION": false,
            "BTC_MONEY_FLOW": 35,

            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "DU_CAP_COUNT": 0,
            "DU_METHOD": "HIGHBB",
            "DU_BUYDOWN": 2,
            "RSI_DU_BUY": 30,
            
            "RT_ENABLED": true,
            "RT_MAXBAG_PROTECTION": 10,
            "RT_SELL_BUYDOWN": 1,
            "RT_SELL_UP": 0.1,
            "RT_TREND_ENABLED": true,
            "RT_BUY_LEVEL": 0.8,
            "RT_GAIN": 0.1,

            "TRAIL_ME_BUY": false,
            "TRAIL_ME_SELL": false,
            "TRAIL_ME_DU": false,
            "TM_RT_SELL": false,
            "TRAIL_ME_RT": false,
            "TRAIL_ME_SELL_RANGE": 0.5,
            "TRAIL_ME_BUY_RANGE": 0.5,
            "TRAIL_ME_RT_SELL_RANGE": 0.5,

            "PANIC_SELL": false,
            "STOP_LIMIT": 61,
            "TRADES_TIMEOUT": 0
        },
        "EMASPREAD": {
            "BUY_LEVEL": 0.1,
            "GAIN": 0.1,

            "HIGH_BB": 45,
            "LOW_BB": 45,
            "PERIOD": 15,
            "EMA1": 16,
            "EMA2": 8,
            "STDV": 2,
            "SMAPERIOD": 50,
            "SLOW_SMA": 2,
            "FAST_SMA": 1,
            "MACD_SHORT": 12,
            "MACD_LONG": 26,
            "MACD_SIGNAL": 9,
            "STOCH_ENABLED": false,
            "STOCH_BUY_LEVEL": 20,
            "STOCH_SELL_LEVEL": 80,
            "STOCH_K": 14,
            "SLOW_STOCH_K": 3,
            "STOCH_D": 3,
            "DI_PERIOD": 14,
            "EMASPREAD": false,
            "ADX_LEVEL": 25,
            "ADX_ENABLED": false,
            "RSI_BUY_ENABLED": false,
            "RSI_SELL_ENABLED": false,
            "RSI_BUY_LEVEL": 30,
            "RSI_SELL_LEVEL": 70,
            "RSI_LENGTH": 14,
            "MFI_ENABLED": false,
            "MFI_SELL_LEVEL": 30,
            "MFI_BUY_LEVEL": 70,
            "KUMO_SENTIMENTS": true,
            "ATRX": 3,
            "ATR_PERIOD": 14,
            "BTC_PND_PROTECTION": false,
            "BTC_MONEY_FLOW": 35,

            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "DU_CAP_COUNT": 0,
            "DU_METHOD": "HIGHBB",
            "DU_BUYDOWN": 2,
            "RSI_DU_BUY": 30,
            
            "RT_ENABLED": true,
            "RT_MAXBAG_PROTECTION": 10,
            "RT_SELL_BUYDOWN": 1,
            "RT_SELL_UP": 0.1,
            "RT_TREND_ENABLED": true,
            "RT_BUY_LEVEL": 0.8,
            "RT_GAIN": 0.1,

            "TRAIL_ME_BUY": false,
            "TRAIL_ME_SELL": false,
            "TRAIL_ME_DU": false,
            "TM_RT_SELL": false,
            "TRAIL_ME_RT": false,
            "TRAIL_ME_SELL_RANGE": 0.5,
            "TRAIL_ME_BUY_RANGE": 0.5,
            "TRAIL_ME_RT_SELL_RANGE": 0.5,

            "PANIC_SELL": false,
            "STOP_LIMIT": 61,
            "TRADES_TIMEOUT": 0
        },
        "emotionless": {
            "BUY_LEVEL": 0.1,
            "GAIN": 0.1,

            "HIGH_BB": 45,
            "LOW_BB": 45,
            "PERIOD": 15,
            "EMA1": 16,
            "EMA2": 8,
            "STDV": 2,
            "SMAPERIOD": 50,
            "SLOW_SMA": 2,
            "FAST_SMA": 1,
            "MACD_SHORT": 12,
            "MACD_LONG": 26,
            "MACD_SIGNAL": 9,
            "STOCH_ENABLED": false,
            "STOCH_BUY_LEVEL": 20,
            "STOCH_SELL_LEVEL": 80,
            "STOCH_K": 14,
            "SLOW_STOCH_K": 3,
            "STOCH_D": 3,
            "DI_PERIOD": 14,
            "EMASPREAD": false,
            "ADX_LEVEL": 25,
            "ADX_ENABLED": false,
            "RSI_BUY_ENABLED": false,
            "RSI_SELL_ENABLED": false,
            "RSI_BUY_LEVEL": 30,
            "RSI_SELL_LEVEL": 70,
            "RSI_LENGTH": 14,
            "MFI_ENABLED": false,
            "MFI_SELL_LEVEL": 30,
            "MFI_BUY_LEVEL": 70,
            "KUMO_SENTIMENTS": true,
            "ATRX": 3,
            "ATR_PERIOD": 14,
            "BTC_PND_PROTECTION": false,
            "BTC_MONEY_FLOW": 35,

            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "DU_CAP_COUNT": 0,
            "DU_METHOD": "HIGHBB",
            "DU_BUYDOWN": 2,
            "RSI_DU_BUY": 30,
            
            "RT_ENABLED": true,
            "RT_MAXBAG_PROTECTION": 10,
            "RT_SELL_BUYDOWN": 1,
            "RT_SELL_UP": 0.1,
            "RT_TREND_ENABLED": true,
            "RT_BUY_LEVEL": 0.8,
            "RT_GAIN": 0.1,

            "TRAIL_ME_BUY": false,
            "TRAIL_ME_SELL": false,
            "TRAIL_ME_DU": false,
            "TM_RT_SELL": false,
            "TRAIL_ME_RT": false,
            "TRAIL_ME_SELL_RANGE": 0.5,
            "TRAIL_ME_BUY_RANGE": 0.5,
            "TRAIL_ME_RT_SELL_RANGE": 0.5,

            "PANIC_SELL": false,
            "STOP_LIMIT": 61,
            "TRADES_TIMEOUT": 0
        } 
    },
    "exchanges": {
        "bittrex": {
            "masterkey": "",
            "mastersecret": "",
            "key": "",
            "secret": ""
        },
        "poloniex": {
            "masterkey": "",
            "mastersecret": "",
            "key": "",
            "secret": ""
        },
        "kraken": {
            "masterkey": "",
            "mastersecret": "",
            "key": "",
            "secret": ""
        },
        "cryptopia": {
            "masterkey": "",
            "mastersecret": "",
            "key": "",
            "secret": ""
        },
        "bitfinex": {
            "masterkey": "",
            "mastersecret": "",
            "key": "",
            "secret": ""
        },
        "binance": {
            "masterkey": "",
            "mastersecret": "",
            "key": "",
            "secret": ""
        },
        "cex": {
            "masterkey": "",
            "mastersecret": "",
            "key": "",
            "secret": "",
            "clientId": ""
        },
        "gdax": {
            "masterkey": "",
            "mastersecret": "",
            "key": "",
            "secret": "",
            "passphrase": ""
        },
        ,
        "kucoin": {
            "masterkey": "",
            "mastersecret": "",
            "key": "",
            "secret": ""
        }
    },
    "bot": {
        "GUI": true,
        "debug": false,
        "BEST_CURRENCIES": false,
        "BOT_DELAY": 1,
        "BOT_CCLEAN": 2,
        "CANCEL_ORDERS_ENABLED": true,
        "CANCEL_ORDERS_CYCLE_CAP": 10,
        "RESERVE_PILE_UP": false,
        "interval_ticker_update": 25000,
        "period_storage_ticker": 2000,
        "timeout_buy": 59000,
        "timeout_sell": 60000,
        "PYRAMID_BUY": false,
        "TRADING_LIMIT_BUY_PYRAMID": 50,
        "TV_GAIN": 0.6,
        "TV_TRADING_LIMIT_BUY": 50,
        "TV_TRADING_LIMIT_BUY_PYRAMID": 50,
        "TV_PYRAMID": false,
        "TV_TRADING_LIMIT_SELL": 50,
        "TV_PROTECTION": false,
        "TV_TRADING_LIMIT_CAP": 0.0001,
        "TV_STOPLOSS_PERCENTAGE": 60,
        "TV_TRADING_LIMIT_ALLIN": false,
        "TV_MVTS": 0.0001,
        "TG_TEST": false,
        "RETRY_TV_ORDER": false,
        "VERBOSE": true,
        "WATCH_MODE": false,
        "MINIMUM_VOLUME_GOOD_CURRENCY": 200,
        "MINIMUM_VARIATION_SUGGEST_TRADE": 1,
        "withdraw_address": "YOURBTCADDRESSHERE",
        "withdraw_threshold": 0.5,
        "TELEGRAM_ENABLED": false,
        "TELEGRAM_NICK": "Gunbot",
        "TOKEN": "YOURTOKEN",
        "chat_id": "123456789"
    },
    "ws": {
        "port": 5001,
        "clientport": 3000,
        "hostname": "127.0.0.1"
    },
    "imap_listener": {
        "enabled": false,
        "authorized_froms": "[\"noreply@tradingview.com\"]",
        "user": "YOUREMAIL",
        "password": "YOURPASSWORD",
        "host": "imap.gmail.com",
        "port": 993,
        "tls": true,
        "tlsOptions": {
            "rejectUnauthorized": false
        }
    }
}
