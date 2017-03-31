import React, { Component } from 'react';
import {styled} from 'styletron-react';

const StyledMortgage = styled('div', {
  padding: '16px 20px 40px 20px'
});

const TabTitle = styled('h2', {
  marginTop: '0',
  marginBottom: '30px',
  fontSize: '16px',
  lineHeight: '19px',
  fontWeight: '500'
});

const StyledForm = styled('form', {
  fontSize: '14px',
  lineHeight: '16px',
  fontWeight: '400',
  color: '#323232'
});

const TopForm = styled('div', {
  marginBottom: '50px'
});

const TopFormRow = styled('div',{
  display: 'flex',
  alignItems: 'center',
  marginBottom: '14px'
});

const FormItem = styled('span', {
  padding: '7px 0',
  width: '325px'
});

const PremiseType = styled('div', {
  border: '1px solid #ececec',
  borderRadius: '2px'
});

const StyledRadio = styled('input', {
  display: 'none'
});

const PremiseTypeLabel = styled('label', (props) => ({
  display: 'inline-block',
  padding: '6px 14px',
  color: props.checked ? '#ffffff' : '#757575',
  verticalAlign: 'center',
  backgroundColor: props.checked ? '#878787' : '#ffffff',
  borderRadius: '2px',
  cursor: 'pointer'
}));

const CostInput = styled('input', {
  marginRight: '4px',
  padding: '6px 6px',
  width: '130px',
  fontFamily: 'inherit',
  fontSize: '14px',
  lineHeight: '16px',
  fontWeight: '400',
  color: '#323232',
  textAlign: 'right',
  border: 'solid 1px #c8c8c8',
})

const StyledFormSelect = styled('select', {
  padding: '6px 27px 6px 15px',
  fontFamily: 'inherit',
  color: '#323232',
  border: 'solid 1px #c8c8c8',
  borderRadius: '3px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 10px top 13px',
  backgroundColor: '#ffffff',
  backgroundSize: '9px 5px',
  backgroundImage: 'url("data:image/svg+xml,' +
    '<svg xmlns=\'http://www.w3.org/2000/svg\'>' +
      '<g stroke=\'#232323\' stroke-width=\'1\'>' +
        '<line x1=\'0\' y1=\'0\' x2=\'4.2\' y2=\'4.3\' />' +
        '<line x1=\'4.2\' y1=\'4.3\' x2=\'8.4\' y2=\'0\' />' +
      '</g>' +
    '</svg>")',
  appearance: 'none'
});

const CreditAmount = styled('p', {
  marginTop: '0',
  marginBottom: '26px',
  fontWeight: '500'
});

const MinPaymentRange = styled('div', {
  position: 'relative',
  marginBottom: '20px',
  width: '284px',
  height: '3px',
  backgroundColor: '#e2e2e2'
});

const MinPaymentSlider = styled('div', {
  position: 'absolute',
  top: '-12px',
  left: '44px',
  zIndex: '1',
  width: '15px',
  height: '25px',
  borderRadius: '2px',
  backgroundColor: '#315efb',
  cursor: 'pointer'
});

const MinPayment = styled('p', {
  position: 'relative',
  marginTop: '0',
  marginBottom: '49px',
  marginLeft: '73px',
  width: '90px',
  fontSize: '12px',
  lineHeight: '14px',
  color: '#9b9b9b',
  '::before': {
    content: '""',
    position: 'absolute',
    top: '-20px',
    left: '-23px',
    display: 'block',
    width: '20px',
    height: '28px',
    borderLeft: '1px dashed #979797',
    borderBottom: '1px dashed #979797'
  }
});

const MonthlyPayment = styled('p', {
  marginTop: '0',
  marginBottom: '5px',
  fontSize: '28px',
  lineHeight: '34px',
  fontWeight: '500'
});

const InitialPayment = styled('p', {
  marginTop: '0',
  marginBottom: '35px',
  fontSize: '14px',
  lineHeight: '17px',
  color: '#919191'
});

const CreditTranscript = styled('div', {
  position: 'relative',
  left: '-8px',
  marginBottom: '37px',
  width: '304px',
  '::after': {
    content: '""',
    position: 'absolute',
    right: '-219px',
    top: '-95px',
    display: 'block',
    width: '190px',
    height: '190px',
    backgroundImage: 'url(img/diagram.png)'
  }
});

const CreditTranscriptRow = styled('div', {
  display: 'flex',
  marginBottom: '8px',
  padding: '4px 12px 4px 25px',
  justifyContent: 'space-between',
  borderRadius: '12px',
  ':hover': {
    backgroundColor: 'rgba(245, 166, 35, 0.15)'
  }
});

const TranscriptItem = styled('span', (props) => ({
  position: 'relative',
  color: '#606060',
  '::before': {
    content: '""',
    position: 'absolute',
    top: '3px',
    left: '-16px',
    display: 'block',
    width: '10px',
    height: '10px',
    backgroundColor: props.labelColor,
    borderRadius: '50%'
  }
}));

const TranscriptCost = styled('span', {
  position: 'relative',
  paddingRight: '13px',
  '::after': {
    content: '"\\20BD"',
    position: 'absolute',
    top: '0',
    right: '0'
  }
});

const Total = styled('div', {
  marginBottom: '35px',
  width: '285px'
});

const TotalRow = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '9px'
});

const TotalItem = styled('span', {
  color: '#606060'
});

const TotalValue = styled('span', {
  position: 'relative',
  paddingRight: '13px',
  fontWeight: '500',
  '::after': {
    content: '"\\20BD"',
    position: 'absolute',
    top: '0',
    right: '0'
  }
});

const FormButton = styled('button', {
  padding: '6px 15px 8px 15px',
  fontFamily: 'inherit',
  fontSize: '14px',
  lineHeight: '16px',
  fontWeight: '400',
  color: '#ffffff',
  backgroundColor: '#315efb',
  border: 'none',
  borderRadius: '3px',
  cursor: 'pointer'
});

class Mortgage extends Component {
  constructor(props) {
    super(props);
    this.state = { checkedRadio: 0 }
  }

  checkedRadio(index) {
    this.setState({ checkedRadio: index })
  }

  isChecked(index) {
    return this.state.checkedRadio === index;
  }

  render() {
    return (
      <StyledMortgage>
        <TabTitle>Ипотека</TabTitle>
        <StyledForm>
          <TopForm>
            <TopFormRow>
              <FormItem>Тип объекта</FormItem>
                <PremiseType>
                <StyledRadio
                  id='premiseType1'
                  name='premiseType'
                  value='flat'
                  type='radio'
                />
                <PremiseTypeLabel
                  htmlFor='premiseType1'
                  checked={this.isChecked(0)}
                  onClick={this.checkedRadio.bind(this, 0)}
                >
                  Квартира
                </PremiseTypeLabel>
                <StyledRadio
                  id='premiseType2'
                  name='premiseType'
                  value='house'
                  type='radio' />
                <PremiseTypeLabel
                  htmlFor='premiseType2'
                  checked={this.isChecked(1)}
                  onClick={this.checkedRadio.bind(this, 1)}
                >
                  Дом
                </PremiseTypeLabel>
              </PremiseType>
            </TopFormRow>
            <TopFormRow>
              <FormItem>Стоимость</FormItem>
              <CostInput type='text' defaultValue='5 000 000' />
              <span>&#8381;</span>
            </TopFormRow>
            <TopFormRow>
              <FormItem>Программа кредитования</FormItem>
              <StyledFormSelect>
                <option>Новостройка</option>
                <option>Вторичка</option>
              </StyledFormSelect>
            </TopFormRow>
            <TopFormRow>
              <FormItem>Банк</FormItem>
              <StyledFormSelect>
                <option>ВТБ</option>
                <option>Сбербанк</option>
              </StyledFormSelect>
            </TopFormRow>
            <TopFormRow>
              <FormItem>Срок кредита</FormItem>
              <StyledFormSelect>
                <option>3 года</option>
                <option>30 лет</option>
              </StyledFormSelect>
            </TopFormRow>
            <TopFormRow>
              <FormItem>Льготные категории</FormItem>
              <StyledFormSelect>
                <option>Отсуствуют</option>
                <option>Присуствуют</option>
              </StyledFormSelect>
            </TopFormRow>
          </TopForm>
          <CreditAmount>Объем кредита: 10% — 14 898 906 &#8381;</CreditAmount>
          <MinPaymentRange>
            <MinPaymentSlider />
          </MinPaymentRange>
          <MinPayment>минимальный взнос: 10%</MinPayment>
          <MonthlyPayment>1 000 000 &#8381;/мес</MonthlyPayment>
          <InitialPayment>Первый взнос: 1 655 545 &#8381;</InitialPayment>
          <CreditTranscript>
            <CreditTranscriptRow>
              <TranscriptItem labelColor={'#4a90e2'}>Кредит</TranscriptItem>
              <TranscriptCost>312 877</TranscriptCost>
            </CreditTranscriptRow>
            <CreditTranscriptRow>
              <TranscriptItem labelColor={'#7ed321'}>Скидка</TranscriptItem>
              <TranscriptCost>312 877</TranscriptCost>
            </CreditTranscriptRow>
            <CreditTranscriptRow>
              <TranscriptItem labelColor={'#f8e71c'}>Проценты по кредиту</TranscriptItem>
              <TranscriptCost>312 877</TranscriptCost>
            </CreditTranscriptRow>
            <CreditTranscriptRow>
              <TranscriptItem labelColor={'#f5a623'}>Страховка недвижимости</TranscriptItem>
              <TranscriptCost>312 877</TranscriptCost>
            </CreditTranscriptRow>
          </CreditTranscript>
          <Total>
            <TotalRow>
              <TotalItem>Кредит с учетом затрат</TotalItem>
              <TotalValue>28 612 477</TotalValue>
            </TotalRow>
            <TotalRow>
              <TotalItem>Цена квартиры</TotalItem>
              <TotalValue>16 544 340</TotalValue>
            </TotalRow>
          </Total>
          <FormButton>Оформить заявку</FormButton>
        </StyledForm>
      </StyledMortgage>
    )
  }
}

export default Mortgage
