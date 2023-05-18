export const useTableData = () => useState('tableData', () => [
  {
    mainTitle: 'Main Topic 1',
    subBouquets: [
      { subTitle: 'Sub bouquet 1',
        sermonsTitles: [
          'sermon 1',
          'sermon 2',
          'sermon 3',
        ],
      },
      { subTitle: 'Sub bouquet 2',
        sermonsTitles: [
          'sermon 1',
          'sermon 2',
          'sermon 3',
        ],
      },
    ],
  },
  {
    mainTitle: 'Main Topic 2',
    subBouquets: [
      { subTitle: 'Sub bouquet 1',
        sermonsTitles: [
          'sermon 1',
          'sermon 2',
        ],
      },
    ],
  },
]);