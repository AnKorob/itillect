import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    clientCompany: null,
    oppositeCompany: {
      full_name: "Общество с ограниченной ответственностью 'Рога и Копыта'",
      short_name: 'ООО "Рога и Копыта"',
      manager: "Ген. директор",
      ceo: "Сергеев Сергей Сергеевич",
      inn: "6601234567",
      kpp: "660123456",
      ogrn: "1234567890123",
      address: "г.Москва ул.Пушкина д.1",
      full_address: "г.Москва ул.Пушкина д.1 п.123",
      type: "LEGAL",
    },
    oppositeBank: {
      name: "МясГазПромБанк",
      correspondent_account: "11223344556677889900",
      bik: "123456789",
    },
    clientBank: {
      name: "",
      correspondent_account: "",
      bik: "",
    },
    companiesTabs: [],
  },
  getters: {
    getClientBankRows: (state) => {
      if (!state.clientBank) return [];
      return [
        {
          key: "bank_Name",
          label: "Наименование Банка",
          value: state.clientBank.name,
        },
        {
          key: "korr_Account",
          label: "Корр Счет",
          value: state.clientBank.correspondent_account,
        },
      ];
    },
    getClientCompanyTableRows: (state) => {
      if (!state.clientCompany) return [];
      return [
        {
          key: "full_name",
          label: "Полное наименование",
          value: state.clientCompany.full_name,
        },
        {
          key: "short_name",
          label: "Краткое наименование",
          value: state.clientCompany.short_name,
        },
        {
          key: "ceo",
          label: state.clientCompany?.manager,
          value: state.clientCompany?.ceo,
        },
        {
          key: "inn",
          label: "ИНН",
          value: state.clientCompany.inn,
        },
        {
          key: "kpp",
          label: "КПП",
          value: state.clientCompany.kpp,
        },
        {
          key: "ogrn",
          label: "ОГРН",
          value: state.clientCompany.ogrn,
        },
        {
          key: "okpo",
          label: "ОКПО",
          value: state.clientCompany.okpo,
        },
        {
          key: "address",
          label: "Юридический Адрес",
          value: state.clientCompany.address,
        },
      ];
    },
  },
  mutations: {
    SET_COMPANY_TAB(state, tab) {
      const isExist = state.companiesTabs.find(
        (cTab) => cTab.hash === tab.hash || cTab.title === tab.title
      );
      if (!isExist) {
        state.companiesTabs.push(tab);
        localStorage.setItem("usedTabs", JSON.stringify(state.companiesTabs));
      }
    },
    SET_COMPANY_TABS(state) {
      state.companiesTabs = JSON.parse(localStorage.getItem("usedTabs")) ?? [];
    },
    SET_OPPOSITE_COMPANY(state, company) {
      state.oppositeCompany = {
        full_name: company.data.name.full_with_opf,
        short_name: company.value,
        manager: company.data.management?.post,
        ceo: company.data.management?.name,
        inn: company.data.inn,
        kpp: company.data.kpp,
        ogrn: company.data.ogrn,
        address: company.data.address.value,
        full_address: company.data.address.unrestricted_value,
        type: company.data.type,
      };
    },
    SET_CLIENT_COMPANY(state, [company, hash]) {
      state.clientCompany = {
        hash,
        full_name: company.data.name.full_with_opf,
        short_name: company.value,
        manager: company.data.management?.post,
        ceo: company.data.management?.name,
        inn: company.data.inn,
        kpp: company.data.kpp,
        ogrn: company.data.ogrn,
        address: company.data.address.value,
        okpo: company.data.okpo,
        type: company.data.type,
      };
    },
    SET_CLIENT_BANK(state, data) {
      state.clientBank = {
        name: data.data.data.bank.suggestions[0].data.name.short,
        correspondent_account:
          data.data.data.bank.suggestions[0].data.correspondent_account,
        bik: data.data.data.bank.suggestions[0].data.bic,
      };
    },

    SET_OPPOSITE_BANK(state, data) {
      state.oppositeBank = {
        name: data.data.data.bank.suggestions[0].data.name.short,
        correspondent_account:
          data.data.data.bank.suggestions[0].data.correspondent_account,
        bik: data.data.data.bank.suggestions[0].data.bic,
      };
    },
  },

  actions: {
    fetchCompanyByHash({ commit }, hash) {
      return new Promise((resolve, reject) => {
        axios
          .post("https://itillect.ru/bcard-ajax/", {
            action: "bcard:company",
            hash: `${hash}`,
          })
          .then((response) => {
            console.log(response.data);
            if (response.data.result === "error")
              throw new Error(response.data.data.message);
            if (!response.data.data.company.suggestions?.length)
              throw new Error("Что-то пошло не так");
            commit("SET_CLIENT_COMPANY", [
              response.data.data.company.suggestions[0],
              hash,
            ]);
            resolve();
          })
          .catch((e) => {
            reject(e);
          });
      });
    },
    getCompanyByInn({ commit }, companyInn) {
      return new Promise((resolve, reject) => {
        axios
          .post("https://itillect.ru/bcard-ajax/", {
            action: "bcard:company:search",
            inn: companyInn,
          })
          .then((response) => {
            console.log(response.data);
            if (response.data.result === "error")
              throw new Error(response.data.data.message);
            if (!response.data.data.company.suggestions?.length)
              throw new Error("Что-то пошло не так");
            commit("SET_CLIENT_COMPANY", [
              response.data.data.company.suggestions[0],
              response.data.data.hash,
            ]);
            resolve();
          })
          .catch((e) => {
            reject(e);
          });
      });
    },
    getOppositeCompanyById({ commit }, oppositeCompanyId) {
      return new Promise((resolve, reject) => {
        axios
          .post("https://itillect.ru/bcard-ajax/", {
            action: "bcard:company:search",
            inn: oppositeCompanyId,
          })
          .then((response) => {
            console.log(response.data);
            if (response.data.result === "error")
              throw new Error(response.data.data.message);
            if (!response.data.data.company.suggestions?.length)
              throw new Error("Что-то пошло не так");
            commit(
              "SET_OPPOSITE_COMPANY",
              response.data.data.company.suggestions[0]
            );
            resolve();
          })
          .catch((e) => {
            reject(e);
          });
      });
    },
    getBankByBik({ commit }, companyBik) {
      axios
        .post("https://itillect.ru/bcard-ajax/", {
          action: "bcard:bank:bik",
          bik: companyBik,
        })
        .then((response) => {
          commit("SET_CLIENT_BANK", response);
        });
    },
    getOppositeBankByBik({ commit }, companyBik) {
      axios
        .post("https://itillect.ru/bcard-ajax/", {
          action: "bcard:bank:bik",
          bik: companyBik,
        })
        .then((response) => {
          commit("SET_OPPOSITE_BANK", response);
        });
    },
    getPdf(_, hash) {
      return new Promise((resolve, reject) => {
        axios
          .post("https://itillect.ru/bcard-ajax/", {
            action: "get-bcard-pdf",
            hash: hash,
            responseType: "blob",
          })
          .then(() => {
            window.location = "https://itillect.ru/bcard-load/" + hash + "/";

            resolve();
          })
          .catch(() => reject());
      });
    },
  },
});
