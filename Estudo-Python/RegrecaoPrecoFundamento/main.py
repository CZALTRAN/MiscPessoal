import pandas_datareader.data as wb
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
import matplotlib.pyplot as plt

import datetime as dt

'''
dados brutos da ITSA 
Ano	    dy	    vpa	    lpa	    roe	    roa
2021	0.0429	7.09	1.33	0.1876	0.145   9.9689515
2020	0.0441	7.09	1.33	0.1876	0.145   9.2738758
2019	0.055	6.82	0.84	0.123	0.0972  10.9242706
2018	0.0845	6.57	1.23	0.1867	0.1528  8.8047862
2017	0.0787	7.38	1.26	0.1711	0.1425  6.6852779
2016	0.0352	6.90	1.08	0.153	0.1242  4.8629560
2015	0.0607	6.42	1.11	0.172	0.1391  4.4712383
2014	0.0775	6.64	1.31	0.1977	0.1617  4.2347845
2013	0.0189	6.42	1.29	0.2017	0.1628  3.6883214
2012	0.0244	6.21	1.07	0.172	0.1359  3.4203275
2011	0.0427	6.19	0.94	0.151	0.0125  3.4325255
2010	0.033	6.71	1.11	0.162	0.0155  3.6606060
'''


def get_quotes(ticker, dt_inicial, dt_final):
    return wb.DataReader(ticker, 'yahoo', dt_inicial, dt_final)["Adj Close"]

def regression():
    itsaData = pd.read_csv('data.csv', delim_whitespace=True)
    itsaData = itsaData.drop('Ano', axis=1)
    print(itsaData.describe())

    columnsName =list(itsaData.columns)
    scaler = MinMaxScaler()
    print(scaler.fit(itsaData))
    itsaEscalado = scaler.fit_transform(itsaData)
    itsaEscalado = pd.DataFrame(itsaEscalado, columns=columnsName)

    summary = itsaEscalado.describe()
    summary = summary.transpose()
    print(summary)
    boxplot = itsaEscalado.boxplot(column=columnsName)
    plt.show()

    CorItsaData = itsaEscalado.corr(method='pearson')
    with pd.option_context('display.max_rows', None, 'display.max_columns', CorItsaData.shape[1]):
        print(CorItsaData)

    plt.matshow(CorItsaData)
    plt.xticks(range(len(CorItsaData.columns)), CorItsaData.columns)
    plt.yticks(range(len(CorItsaData.columns)), CorItsaData.columns)
    plt.colorbar()
    plt.show()


def main():
    regression()


if __name__ == '__main__':
    main()
