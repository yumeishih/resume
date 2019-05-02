import React from 'react'
import { FiCircle } from "react-icons/fi";
import ReactMarkdown from 'react-markdown';
import { formatMY } from 'Utils/time';
import { TiAt } from "react-icons/ti";

const PeriodBlock = ({
  subtitle,
  local,
  start,
  end,
  detail,
  organization,
  showBorderCircle
}) => {
  const startDate = formatMY(start)
  const endDate = formatMY(end)
  const showDetail = detail.replace(/  +?/g, '')
  return (
    <div className="period-block">
      {showBorderCircle && <FiCircle size={6} className="border-circle"/>}
        <div className="subtitle">
          {subtitle && <span>{subtitle}</span>}
          <div className="has-icon">
            {subtitle && organization &&
              <>
                <span className="sm-hide">at</span>
                <TiAt className="sm-show" size={20}/>
              </>
            }
            {organization && <ReactMarkdown source={organization} className="organization" linkTarget="_blank" />}
          </div>
          {local && <span className="sm-hide">, {local}</span>}
        </div>
        {startDate &&
          <div className="date">
            {`${startDate} - ${endDate}`}
          </div>
        }
        <ReactMarkdown source={showDetail} className="block-text"/>
    </div>
  )
}

export default PeriodBlock
