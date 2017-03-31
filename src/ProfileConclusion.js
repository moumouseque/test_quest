import React, { Component } from 'react';
import { styled } from 'styletron-react';
import { editIcon } from './SvgImages';

const ProfileTitleBlock = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '29px'
});

const ProfileTitle = styled('h2', {
  margin: '0',
  fontSize: '16px',
  lineHeight: '19px',
  fontWeight: '500',
  color: '#323232'
});

const EditIcon = styled('a', (props) => ({
  display: 'block',
  width: '18px',
  height: '18px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: '18px 18px',
  backgroundImage: `url(${editIcon})`,
  cursor: 'pointer'
}));

const ProfileTable = styled('table', {
  marginBottom: '23px',
  width: '100%',
  fontSize: '14px',
  lineHeight: '16px',
  fontWeight: '400',
  borderCollapse: 'collapse'
});

const ProfileKey = styled('td', {
  padding: '11px 0',
  width: '251px',
  textAlign: 'left',
  color: 'rgba(50, 50, 50, 0.74)',
  borderBottom: '1px solid #dbdbdb'
});

const ProfileValue = styled('td', {
  textAlign: 'left',
  color: 'rgba(50, 50, 50, 0.81)',
  borderBottom: '1px solid #dbdbdb'
});

const ProfileKeyDescription = styled('td', {
  textAlign: 'right',
  borderBottom: '1px solid #dbdbdb'
});

const ProfileKeyDescriptionStyle = styled('span', {
  padding: '1px 5px',
  fontSize: '12px',
  lineHeight: '14px',
  color: 'rgba(50, 50, 50, 0.56)',
  borderRadius: '50%',
  backgroundColor: '#f2f2f2',
  cursor: 'pointer'
})

const ConclusionTitle = styled('h2', {
  marginTop: '21px',
  marginBottom: '9px',
  fontSize: '16px',
  lineHeight: '19px',
  fontWeight: '500',
  color: '#323232'
});

const ConclusionContent = styled('p', {
  margin: '0',
  fontSize: '14px',
  lineHeight: '24px',
  fontWeight: '400',
  color: '#323232'
});

class ProfileConclusion extends Component {
  render() {
    return (
      <div>
        <ProfileTitleBlock>
          <ProfileTitle>Анкета клиента</ProfileTitle>
          <EditIcon />
        </ProfileTitleBlock>
        <ProfileTable>
          <tbody>
            <tr>
              <ProfileKey>Бытовые</ProfileKey>
              <ProfileValue>40</ProfileValue>
              <ProfileKeyDescription>
                <ProfileKeyDescriptionStyle>?</ProfileKeyDescriptionStyle>
              </ProfileKeyDescription>
            </tr>
            <tr>
              <ProfileKey>Социальные</ProfileKey>
              <ProfileValue>50</ProfileValue>
              <ProfileKeyDescription>
                <ProfileKeyDescriptionStyle>?</ProfileKeyDescriptionStyle>
              </ProfileKeyDescription>
            </tr>
            <tr>
              <ProfileKey>Финансовые</ProfileKey>
              <ProfileValue>60</ProfileValue>
              <ProfileKeyDescription>
                <ProfileKeyDescriptionStyle>?</ProfileKeyDescriptionStyle>
              </ProfileKeyDescription>
            </tr>
            <tr>
              <ProfileKey>Истина</ProfileKey>
              <ProfileValue>40%</ProfileValue>
              <ProfileKeyDescription>
                <ProfileKeyDescriptionStyle>?</ProfileKeyDescriptionStyle>
              </ProfileKeyDescription>
            </tr>
            <tr>
              <ProfileKey>Ложь</ProfileKey>
              <ProfileValue>60%</ProfileValue>
              <ProfileKeyDescription>
                <ProfileKeyDescriptionStyle>?</ProfileKeyDescriptionStyle>
              </ProfileKeyDescription>
            </tr>
            <tr>
              <ProfileKey>Срок выхода на сделку</ProfileKey>
              <ProfileValue>1-3 месяца</ProfileValue>
              <ProfileKeyDescription>
                <ProfileKeyDescriptionStyle>?</ProfileKeyDescriptionStyle>
              </ProfileKeyDescription>
            </tr>
          </tbody>
        </ProfileTable>
        <ConclusionTitle>Вывод</ConclusionTitle>
        <ConclusionContent>
          Покупка имеет статусные пожелания. Выясните источник этих пожеланий, кто рекомендовал (район, улицу, дом). Выясните почему для клиента так важен статус жилья. Клиент значительно стеснен в финансовых условиях. Скорее он будет склонен к изменению района и статуса жилья, чем пойдет на увеличение цены. Поэтому можно варьировать и предлагать другие районы. Основная задача Бытовая. Скорее всего клиент на зря выбрал указанные район. Уточните все параметры. Уточните источники потребности. Семья и родственники играют главную роль.
        </ConclusionContent>
        <ConclusionTitle>Обратите внимание</ConclusionTitle>
        <ConclusionContent>
          Контакт не дает объективную картину, либо не является источником потребности. Ищите правдивую информацию проводя более качественное интервью или ищите чью потребность он озвучивает мотивируйте тем, что умеете подбирать выгодные варианты с учетом всех требований клиентов. Скажите, что в моей работе мелочей не бывает, поэтому я готов учесть все детали. Если клиент не меняет условия качества жилья и не снижает требования к району, сделка скорее всего не состоится. Упирайте на красивой и спокойное решение бытовых проблем. Скажите, что умеете очень эффективно учитывать требования клиента к обустройству семьи на новом месте. Отметьте, что семейные ценности вам близки и понятны.
        </ConclusionContent>
      </div>
    )
  }
}

export default ProfileConclusion
