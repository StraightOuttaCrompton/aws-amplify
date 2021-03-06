import { AmplifyConfig } from './types';

export default class Parser {
    static parseMobilehubConfig(config): AmplifyConfig {
        const amplifyConfig: AmplifyConfig = {};
        // Analytics
        if (config['aws_mobile_analytics_app_id']) {
            const Analytics = {};
            Analytics['appId'] = config['aws_mobile_analytics_app_id'];
            Analytics['region'] = config['aws_mobile_analytics_app_region'];
            amplifyConfig.Analytics = Analytics;
        }

        amplifyConfig.Analytics = Object.assign({}, amplifyConfig.Analytics, config.Analytics);
        return amplifyConfig;
    }
}
