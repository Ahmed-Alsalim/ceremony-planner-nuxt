import { createI18n } from 'vue-i18n';

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locales: ['en', 'ar'],
    locale: 'en',
    messages: {
      en: {
        test: 'Test',
        date: 'Date',
        cancel: 'Cancel',
        save: 'Save',
        add: 'Add',
        'summary.table': 'Summary Table',
        'date.sheet': 'Annual plan',
        'annual.sermon.plan': 'Annual Sermon Plan',
        'main.themes': 'Main Themes',
        'main.theme': 'Main Theme',
        'sub.bouquets': 'Sub Bouquets',
        'sub.bouquet.title': "Sub Bouquet's Title",
        'sermon.title': 'Sermon Title',
        'sermon.titles': "Sermon's Titles",
        'add.bouquet': 'Add Bouquet',
        'add.sermon': 'Add Sermon',
      },
      ar: {
        test: 'تجربة',
        date: 'تاريخ',
        cancel: 'إلغاء',
        save: 'حفظ',
        add: 'إضافة',
        'summary.table': 'جدول الخطة',
        'date.sheet': 'الجدول السنوي',
        'annual.sermon.plan': 'خطة الخطبة السنوية',
        'main.themes': 'الموضوعات الرئيسية',
        'main.theme': 'الموضوع الرئيسي',
        'sub.bouquets': 'الباقات الفرعية',
        'sub.bouquet.title': 'عنوان الباقة الفرعية',
        'sermon.title': 'عنوان الخطبة',
        'sermon.titles': 'عناوين الخطب',
        'add.bouquet': 'إضافة باقة فرعية',
        'add.sermon': 'إضافة خطبة',
      },
    },
  });

  vueApp.use(i18n);
});