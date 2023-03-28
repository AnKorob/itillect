<template>
  <div class="card-page">
    <div class="company-card">
      <div class="company-card-header">
        <div class="company-card-header-name">"OOO{{}} IDITENAXYI"</div>
        <div class="company-card-header-button">
          <button class="type">PDF</button>
          <button class="type">DOCX</button>
          <button class="type">Email</button>
          <button class="type">Link</button>
        </div>
      </div>
      <div class="company-card-info">
        <div class="company-card-info-block">
          <div class="company-card-info-block-option">Полное наименование</div>
          <div class="company-card-info-block-value">
            общество с ограниченной ответственностью
          </div>
          <button class="copy">Copy</button>
        </div>
        <div class="company-card-info-header">Банковские реквизиты</div>
        <div class="company-card-info-block">
          <div class="company-card-info-block-option">БИК</div>
          <div class="company-card-info-block-value">123456789</div>
          <button class="copy">Copy</button>
        </div>
      </div>
    </div>
    <div class="order">
      <div class="order-pattern">
        <div class="order-pattern-header">
          <div>Shablon</div>
          <button class="copy--visible">Copy</button>
        </div>
        <div class="order-pattern-content">
          Tut menyaetsya text v zavisimosti ot checkbox
        </div>
        <div class="order-pattern-block">
          <div class="order-pattern-block-header">
            <div>Rekvizit</div>
            <button class="copy--visible">Copy</button>
          </div>
          <div class="order-pattern-block-card">
            <div class="order-pattern-block-card-agent">
              <h3>зак</h3>
            </div>
            <div class="order-pattern-block-card-agent">
              <h3>исп</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="order-setting">
        <h3>ASDF</h3>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider">
            <span>Yurlico</span>
            <span>Fizlico</span>
          </span>
        </label>
        <h3>asdf</h3>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider">
            <span>Ispoln</span>
            <span>Zakaz</span>
          </span>
        </label>
        <div class="order-setting-field">
          <label class="order-setting-field-label"></label>
          <input type="text" class="order-setting-field-value" />
        </div>
        <br />
        <div class="comment">
          *Мы не сохраняем данные контрагентов.После перезагрузки страниц,
          данные о контрагентах обнуляться.
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardPage",
};
</script>
<style lang="scss">
.card-page {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
}
.company-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 38px;
  &-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-weight: 300;
    margin-bottom: 32px;
    &-name {
      display: flex;
      font-size: 36px;
    }
    &-button {
      display: flex;
      cursor: pointer;
    }
  }
  &-info {
    display: flex;
    flex-direction: column;
    &-header {
      font-size: 20px;
    }
    &-block {
      display: flex;
      flex-direction: row;
      width: 100%;
      align-content: center;
      align-items: center;
      justify-content: center;
      &:hover {
        background-color: #ccc;
        & > .copy {
          opacity: 1;
          width: 96px;
        }
      }
      &-option {
        display: flex;
        color: #666666;
        justify-content: flex-start;
        align-items: center;
        width: 300px;
        padding-right: 12px;
      }
      &-value {
        display: flex;
        align-items: center;
        padding: 12px;
        width: 600px;
        font-weight: 500;
        text-transform: uppercase;
      }
    }
  }
}
.order {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 48px;
  padding-top: 36px;
  border-top: #666666 1px solid;
  &-setting {
    display: flex;
    flex-direction: column;
    width: 332px;
    padding-left: 32px;
    &-field {
      &-value {
        width: 100px;
        border: 1px solid #666;
        color: #666;
        &:focus {
          border: 1px solid #0a81ff;
        }
      }
      &-label {
        font-size: 14px;
        font-size: 600;
      }
    }
  }
  &-pattern {
    display: flex;
    flex-direction: column;
    font-size: 24px;
    width: calc(100% - 332px);
    &-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 24px;
    }
    &-content {
      display: flex;
      font-size: 14px;
    }
    &-block {
      display: flex;
      flex-direction: column;
      &-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
      }
      &-card {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        &-agent {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          width: auto;
        }
      }
    }
  }
}
.copy {
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  margin: 0 18px;
  width: 96px;
  right: 0;
  top: 6px;
  cursor: pointer;
  font-size: 12px;
  height: 24px;
  background-color: #0a81ff;
  border-radius: 3px;
  color: #fff;
  border: none;
  &:hover {
    opacity: 1;
    width: 96px;
    display: flex;
    height: 24px;
    justify-content: center;
    align-items: center;
    padding: 0 18px;
    border: none;
    background-color: #03274e;
    color: #fff;
    font-size: 12px;
    border-radius: 3px;
    cursor: pointer;
    right: 0;
    top: 6px;
  }
  &--visible {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 24px;
    width: 96px;
    padding: 0 18px;
    border: none;
    background-color: #0a81ff;
    color: #fff;
    font-size: 12px;
    border-radius: 3px;
    cursor: pointer;
    right: 0;
    top: 6px;
    &:hover {
      background-color: #03274e;
      width: 96px;
    }
  }
}
.type {
  cursor: pointer;
  width: auto;
  display: block;
  height: 32px;
  float: left;
  margin-right: 12px;
  padding: 0 14px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #e8e8e8;
  background-color: #fff;
  &:hover {
    cursor: pointer;
    border-color: #0a81ff;
    color: #0a81ff;
  }
}
/*checkbox*/
.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }
}
.slider {
  position: absolute;
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 4px;
  align-content: center;
  & > span {
    align-self: center;
  }
  &:before {
    position: absolute;
    content: "";
    height: 1.4em;
    width: 5.2em;
    border-radius: 4px;
    left: 0.3em;
    bottom: 0.3em;
    background-color: white;
    opacity: 0.6;
    transition: 0.4s;
  }
}

input:checked + .slider {
  background-color: #ccc;
}

input:focus + .slider {
  box-shadow: 0 0 1px #ccc;
}

input:checked + .slider:before {
  transform: translateX(100px);
}
.comment {
  width: 100%;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid #e8e8e8;
  font-size: 14px;
  color: #666;
  text-align: left;
  font-weight: 300;
}
</style>
