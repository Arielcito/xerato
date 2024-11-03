import { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";

const CalEmbed = () => {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return <Cal calLink="cal.com/ariel-serato-lbbyvw/30min" style={{width:"100%", height:"100%", overflow:"scroll"}} />;
};

export default CalEmbed;