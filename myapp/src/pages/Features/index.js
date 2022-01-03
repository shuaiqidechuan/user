import React from "react"
import { Button } from 'antd';
import { useIntl } from 'umi';


const Features = () => {
    const intl = useIntl();
    return <div>
        <Button>
            {intl.formatMessage(
                {
                    id: 'name',
                    defaultMessage: 'zbk',
                }
            )}
        </Button>
    </div>
};

export default Features;