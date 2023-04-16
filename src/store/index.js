import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchCompany: {
      info: [],
      hash: "",
    },
    oppositeCompany: [
      {
        key: "full_Name",
        label: "Полное наименование",
        value: "Общество с ограниченной ответственностью 'Рога и Копыта'",
      },
      {
        key: "short_Name",
        label: "Краткое наименование",
        value: 'ООО "Рога и Копыта"',
      },
      {
        key: "CEO",
        label: "Ген. Директор",
        value: "Сергеев Сергей Сергеевич",
      },
      {
        key: "INN",
        label: "ИНН",
        value: "6601234567",
      },
      {
        key: "KPP",
        label: "КПП",
        value: "660123456",
      },
      {
        key: "OGRN",
        label: "ОГРН",
        value: "1234567890123",
      },
      {
        key: "registration_Adress",
        label: "Адрес регистрации",
        value: "г.Москва ул.Пушкина д.1",
      },
      {
        key: "full_Registration_Adress",
        label: "full_Адрес регистрации",
        value: "г.Москва ул.Пушкина д.1 п.123",
      },
    ],
    oppositeBank: [
      {
        key: "bank_Name",
        label: "Наименование Банка",
        value: "МясГазПромБанк",
      },
      {
        key: "korr_Account",
        label: "Корр Счет",
        value: "11223344556677889900",
      },
      {
        key: "BIK",
        label: "BIK",
        value: "123456789",
      },
    ],
    companyBank: [
      {
        key: "bank_Name",
        label: "Наименование Банка",
        value: "",
      },
      {
        key: "korr_Account",
        label: "Корр Счет",
        value: "",
      },
      {
        key: "BIK",
        label: "БИК",
        value: "",
      },
    ],
    companiesTabs: [],
  },
  getters: {},
  mutations: {
    SET_COMPANY_TAB(state, tab) {
      state.companiesTabs.push(tab);
    },
    SET_OPPOSITE_COMPANY(state, data) {
      const newObj = [
        {
          key: "full_Name",
          label: "Полное наименование",
          value:
            data.data.data.company.suggestions[0].data.name
              .full_with_opfdefaule,
        },
        {
          key: "short_Name",
          label: "Краткое наименование",
          value: data.data.data.company.suggestions[0].value,
        },
        {
          key: "CEO",
          label: "Ген. Директор",
          value: data.data.data.company.suggestions[0].data.management.name,
        },
        {
          key: "INN",
          label: "ИНН",
          value: data.data.data.company.suggestions[0].data.inn,
        },
        {
          key: "KPP",
          label: "КПП",
          value: data.data.data.company.suggestions[0].data.kpp,
        },
        {
          key: "OGRN",
          label: "ОГРН",
          value: data.data.data.company.suggestions[0].data.ogrn,
        },
        {
          key: "registration_Adress",
          label: "Адрес регистрации",
          value: data.data.data.company.suggestions[0].data.address.value,
        },
        {
          key: "full_registration_Adress",
          label: "full_Адрес регистрации",
          value:
            data.data.data.company.suggestions[0].data.address
              .unrestricted_value,
        },
      ];
      state.oppositeCompany = newObj;
    },
    SET_COMPANY(state, [company, hash]) {
      state.searchCompany.hash = hash;
      state.searchCompany.title = company.value;
      state.searchCompany.info = [
        {
          key: "full_Name",
          label: "Полное наименование",
          value: company.data.name.full_with_opf,
        },
        {
          key: "short_Name",
          label: "Краткое наименование",
          value: company.value,
        },
        {
          key: "CEO",
          label: "Ген. Директор",
          value: company.data.management.name,
        },
        {
          key: "INN",
          label: "ИНН",
          value: company.data.inn,
        },
        {
          key: "KPP",
          label: "КПП",
          value: company.data.kpp,
        },
        {
          key: "OGRN",
          label: "ОГРН",
          value: company.data.ogrn,
        },
        {
          key: "registration_address",
          label: "Адрес регистрации",
          value: company.data.address.value,
        },
        {
          key: "full_registration_address",
          label: "Полный Адрес регистрации",
          value: company.data.address.unrestricted_value,
        },
      ];
    },
    SET_COMPANY_BANK(state, data) {
      const newObj = [
        {
          key: "bank_Name",
          label: "Наименование Банка",
          value: data.data.data.bank.suggestions[0].data.name.short,
        },
        {
          key: "korr_Account",
          label: "Корр Счет",
          value: data.data.data.bank.suggestions[0].data.correspondent_account,
        },
        {
          key: "bik",
          label: "БИК",
          value: data.data.data.bank.suggestions[0].data.bic,
        },
      ];
      state.companyBank = newObj;
    },
    SET_OPPOSITE_BANK(state, data) {
      const newObj = [
        {
          key: "bank_Name",
          label: "Наименование Банка",
          value: data.data.data.bank.suggestions[0].data.name.short,
        },
        {
          key: "korr_Account",
          label: "Корр Счет",
          value: data.data.data.bank.suggestions[0].data.correspondent_account,
        },
        {
          key: "bik",
          label: "БИК",
          value: data.data.data.bank.suggestions[0].data.bic,
        },
      ];
      state.oppositeBank = newObj;
    },
  },
  actions: {
    getCompanyById({ commit }, companyId) {
      axios
        .post("https://itillect.ru/bcard-ajax/", {
          action: "bcard:company:search",
          inn: companyId,
        })
        .then((response) => {
          console.log(response.data);
          commit("SET_COMPANY", [
            response.data.data.company.suggestions[0],
            response.data.data.hash,
          ]);
        });
    },
    getOppositeCompanyById({ commit }, oppositeCompanyId) {
      axios
        .post("https://itillect.ru/bcard-ajax/", {
          action: "bcard:company:search",
          inn: oppositeCompanyId,
        })
        .then((response) => {
          console.log(response);
          commit("SET_OPPOSITE_COMPANY", response);
        });
    },
    getBankByBik({ commit }, companyBik) {
      axios
        .post("https://itillect.ru/bcard-ajax/", {
          action: "bcard:bank:bik",
          bik: companyBik,
        })
        .then((response) => {
          console.log(response);
          commit("SET_COMPANY_BANK", response);
        });
    },
    getOppositeBankByBik({ commit }, companyBik) {
      axios
        .post("https://itillect.ru/bcard-ajax/", {
          action: "bcard:bank:bik",
          bik: companyBik,
        })
        .then((response) => {
          //console.log(response);
          commit("SET_OPPOSITE_BANK", response);
        });
    },
  },
  modules: {},
});
