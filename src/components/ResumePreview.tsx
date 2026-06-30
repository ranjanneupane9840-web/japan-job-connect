import { forwardRef } from 'react'
import type { ResumeData } from '../types/Resume' // adjust path to your ResumeData type file

interface Props {
  data: ResumeData
}

const cellStyle: React.CSSProperties = {
  border: '1px solid #000',
  padding: '4px 6px',
  fontSize: '11px',
  verticalAlign: 'middle',
}

const labelStyle: React.CSSProperties = {
  ...cellStyle,
  background: '#f5f5f5',
  fontWeight: 600,
  textAlign: 'center',
  whiteSpace: 'nowrap',
}

const ResumePreview = forwardRef<HTMLDivElement, Props>(({ data }, ref) => {
  const age = data.birthDate
    ? Math.floor(
        (Date.now() - new Date(data.birthDate).getTime()) / (1000 * 60 * 60 * 24 * 365.25)
      )
    : ''

  return (
    <div ref={ref}>
      {/* ===================== PAGE 1: 履歴書 ===================== */}
      <div
        className="a4-page"
        style={{
          width: '210mm',
          height: '297mm',
          padding: '10mm',
          boxSizing: 'border-box',
          background: '#fff',
          fontFamily: '"Noto Sans JP", "Hiragino Kaku Gothic ProN", sans-serif',
          color: '#000',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <h1 style={{ fontSize: '22px', fontWeight: 700, margin: 0 }}>履歴書</h1>
          <div style={{ fontSize: '11px' }}>
            記入日：{data.filledDate ? data.filledDate.replace(/-/g, '/') : ''}
          </div>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '8px' }}>
          <tbody>
            <tr>
              <td style={{ ...cellStyle, width: '70%' }} rowSpan={3}>
                <div style={{ marginBottom: '6px' }}>
                  <div style={{ fontSize: '10px' }}>ふりがな</div>
                  <div style={{ fontSize: '12px' }}>{data.fullNameKana}</div>
                </div>
                <div>
                  <div style={{ fontSize: '10px' }}>氏名</div>
                  <div style={{ fontSize: '18px', fontWeight: 600 }}>{data.fullName}</div>
                </div>
              </td>
              <td
                style={{ ...cellStyle, width: '30%', textAlign: 'center', verticalAlign: 'top' }}
                rowSpan={3}
              >
                {data.photoDataUrl ? (
                  <img
                    src={data.photoDataUrl}
                    alt="photo"
                    style={{ width: '30mm', height: '40mm', objectFit: 'cover', margin: '0 auto' }}
                  />
                ) : (
                  <div
                    style={{
                      width: '30mm',
                      height: '40mm',
                      border: '1px dashed #999',
                      margin: '0 auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '9px',
                      color: '#999',
                    }}
                  >
                    写真
                  </div>
                )}
              </td>
            </tr>
          </tbody>
        </table>

        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '0' }}>
          <tbody>
            <tr>
              <td style={{ ...cellStyle, width: '70%' }}>
                <div style={{ fontSize: '10px' }}>生年月日</div>
                <div style={{ fontSize: '12px' }}>
                  {data.birthDate ? data.birthDate.replace(/-/g, '/') : ''}
                  {age !== '' ? `（満${age}歳）` : ''}　
                  {data.gender ? `性別：${data.gender}` : ''}
                </div>
              </td>
            </tr>
            <tr>
              <td style={cellStyle}>
                <div style={{ fontSize: '10px' }}>ふりがな</div>
                <div style={{ fontSize: '11px' }}>{data.addressKana}</div>
                <div style={{ fontSize: '10px', marginTop: '4px' }}>
                  現住所　〒{data.postalCode}
                </div>
                <div style={{ fontSize: '12px' }}>{data.address}</div>
                <div style={{ fontSize: '10px', marginTop: '2px' }}>
                  電話：{data.phone}　Email：{data.email}
                </div>
              </td>
            </tr>
            <tr>
              <td style={cellStyle}>
                {data.sameAsCurrentAddress ? (
                  <div style={{ fontSize: '10px' }}>連絡先　同上</div>
                ) : (
                  <>
                    <div style={{ fontSize: '10px' }}>ふりがな</div>
                    <div style={{ fontSize: '11px' }}>{data.contactAddressKana}</div>
                    <div style={{ fontSize: '10px', marginTop: '4px' }}>
                      連絡先　〒{data.contactPostalCode}
                    </div>
                    <div style={{ fontSize: '12px' }}>{data.contactAddress}</div>
                    <div style={{ fontSize: '10px', marginTop: '2px' }}>
                      電話：{data.contactPhone}
                    </div>
                  </>
                )}
              </td>
            </tr>
          </tbody>
        </table>

        {/* 学歴・職歴 */}
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '6px' }}>
          <thead>
            <tr>
              <td style={{ ...labelStyle, width: '15%' }}>年</td>
              <td style={{ ...labelStyle, width: '10%' }}>月</td>
              <td style={{ ...labelStyle, width: '75%' }}>学歴・職歴</td>
            </tr>
          </thead>
          <tbody>
            {data.history.slice(0, 12).map((h) => (
              <tr key={h.id}>
                <td style={{ ...cellStyle, textAlign: 'center' }}>{h.year}</td>
                <td style={{ ...cellStyle, textAlign: 'center' }}>{h.month}</td>
                <td
                  style={{
                    ...cellStyle,
                    paddingLeft: '10px',
                    textAlign:
                      h.type === 'education' || h.type === 'work' ? 'center' : 'left',
                    fontWeight: h.type === 'education' || h.type === 'work' ? 600 : 400,
                  }}
                >
                  {h.content}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ===================== PAGE 2 ===================== */}
      <div
        className="a4-page"
        style={{
          width: '210mm',
          height: '297mm',
          padding: '10mm',
          boxSizing: 'border-box',
          background: '#fff',
          fontFamily: '"Noto Sans JP", "Hiragino Kaku Gothic ProN", sans-serif',
          color: '#000',
          marginTop: '6mm',
        }}
      >
        {/* 免許・資格 */}
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <td style={{ ...labelStyle, width: '15%' }}>年</td>
              <td style={{ ...labelStyle, width: '10%' }}>月</td>
              <td style={{ ...labelStyle, width: '75%' }}>免許・資格</td>
            </tr>
          </thead>
          <tbody>
            {data.licenses.slice(0, 5).map((l) => (
              <tr key={l.id}>
                <td style={{ ...cellStyle, textAlign: 'center' }}>{l.year}</td>
                <td style={{ ...cellStyle, textAlign: 'center' }}>{l.month}</td>
                <td style={{ ...cellStyle, paddingLeft: '10px' }}>{l.content}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* 志望の動機・自己PR */}
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '6px' }}>
          <tbody>
            <tr>
              <td style={{ ...labelStyle, height: '24px' }}>
                志望の動機、特技、好きな学科、アピールポイントなど
              </td>
            </tr>
            <tr>
              <td style={{ ...cellStyle, height: '60mm', whiteSpace: 'pre-wrap', fontSize: '11px' }}>
                {data.motivation}
                {data.motivation && data.selfPR ? '\n\n' : ''}
                {data.selfPR}
              </td>
            </tr>
          </tbody>
        </table>

        {/* 本人希望記入欄など */}
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '6px' }}>
          <tbody>
            <tr>
              <td style={{ ...cellStyle, width: '25%' }}>通勤時間</td>
              <td style={{ ...cellStyle, width: '25%' }}>{data.commutingTime}</td>
              <td style={{ ...cellStyle, width: '25%' }}>扶養家族（配偶者を除く）</td>
              <td style={{ ...cellStyle, width: '25%' }}>{data.dependents}　人</td>
            </tr>
            <tr>
              <td style={cellStyle}>配偶者</td>
              <td style={cellStyle}>{data.spouse}</td>
              <td style={cellStyle}>配偶者の扶養義務</td>
              <td style={cellStyle}>{data.spouseSupport}</td>
            </tr>
          </tbody>
        </table>

        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '6px' }}>
          <tbody>
            <tr>
              <td style={labelStyle}>本人希望記入欄</td>
            </tr>
            <tr>
              <td style={{ ...cellStyle, height: '30mm', whiteSpace: 'pre-wrap', fontSize: '11px' }}>
                {data.requests}
              </td>
            </tr>
          </tbody>
        </table>

        {/* 自己紹介書 */}
        <h2 style={{ fontSize: '16px', fontWeight: 700, marginTop: '10px', marginBottom: '4px' }}>
          自己紹介書
        </h2>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            <tr>
              <td style={{ ...labelStyle, width: '20%' }}>長所</td>
              <td style={{ ...cellStyle, whiteSpace: 'pre-wrap', fontSize: '11px' }}>
                {data.strengths}
              </td>
            </tr>
            <tr>
              <td style={labelStyle}>短所</td>
              <td style={{ ...cellStyle, whiteSpace: 'pre-wrap', fontSize: '11px' }}>
                {data.weaknesses}
              </td>
            </tr>
            <tr>
              <td style={labelStyle}>趣味・特技</td>
              <td style={{ ...cellStyle, whiteSpace: 'pre-wrap', fontSize: '11px' }}>
                {data.hobbies}
              </td>
            </tr>
            <tr>
              <td style={labelStyle}>自己紹介・自己PR</td>
              <td style={{ ...cellStyle, whiteSpace: 'pre-wrap', fontSize: '11px', height: '25mm' }}>
                {data.selfIntro}
              </td>
            </tr>
            <tr>
              <td style={labelStyle}>志望理由（詳細）</td>
              <td style={{ ...cellStyle, whiteSpace: 'pre-wrap', fontSize: '11px', height: '25mm' }}>
                {data.reasonForApplying}
              </td>
            </tr>
            <tr>
              <td style={labelStyle}>入社後の抱負・目標</td>
              <td style={{ ...cellStyle, whiteSpace: 'pre-wrap', fontSize: '11px', height: '25mm' }}>
                {data.futureGoals}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
})

ResumePreview.displayName = 'ResumePreview'

export default ResumePreview
