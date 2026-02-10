<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteCollectionEntity>
   <description></description>
   <name>healthcare-tests - TS_RegressionTestCollection</name>
   <tag></tag>
   <delayBetweenInstances>0</delayBetweenInstances>
   <executionMode>PARALLEL</executionMode>
   <maxConcurrentInstances>1</maxConcurrentInstances>
   <testSuiteRunConfigurations>
      <TestSuiteRunConfiguration>
         <configuration>
            <groupName>Web Desktop</groupName>
            <profileName>default</profileName>
            <requireConfigurationData>true</requireConfigurationData>
            <runConfigurationData>
               <entry>
                  <key>testCloudMobileDevice</key>
                  <value>{
  &quot;capability&quot;: {
    &quot;availability&quot;: &quot;HIGH&quot;
  },
  &quot;id&quot;: &quot;any_android_phone&quot;,
  &quot;isTablet&quot;: false,
  &quot;mobileDeviceId&quot;: &quot;any_android_phone_16&quot;,
  &quot;name&quot;: &quot;Any Phone&quot;,
  &quot;displayName&quot;: &quot;Any Phone&quot;,
  &quot;osVersion&quot;: &quot;16&quot;,
  &quot;os&quot;: &quot;Android&quot;,
  &quot;platformName&quot;: &quot;ANDROID&quot;,
  &quot;timeout&quot;: 15,
  &quot;usingTunnel&quot;: false,
  &quot;isHighAvailableDevice&quot;: true
}</value>
               </entry>
               <entry>
                  <key>testCloudSessionType</key>
                  <value>MOBILE_NATIVE</value>
               </entry>
               <entry>
                  <key>testCloudOverrideMobileApplication</key>
                  <value>{&quot;id&quot;:&quot;4ca497e2-2623-408d-964a-3232b6452d60&quot;,&quot;organizationId&quot;:&quot;38949&quot;,&quot;name&quot;:&quot;API Demos&quot;,&quot;platform&quot;:&quot;ANDROID&quot;,&quot;status&quot;:&quot;READY&quot;,&quot;size&quot;:5049402,&quot;storagePath&quot;:&quot;04f1abb2-5fbc-463a-874d-c9552ae09f1d&quot;,&quot;uploadedDate&quot;:&quot;2026-02-10T04:33:35.95942&quot;,&quot;createdDate&quot;:&quot;2026-02-10T04:33:35.95942&quot;,&quot;updatedDate&quot;:&quot;2026-02-10T04:33:38.632079&quot;,&quot;fileName&quot;:&quot;ApiDemos-4.1.0.apk&quot;,&quot;metadata&quot;:{&quot;identifier&quot;:&quot;io.appium.android.apis&quot;,&quot;name&quot;:&quot;API Demos&quot;,&quot;version&quot;:&quot;4.1.0&quot;}}</value>
               </entry>
            </runConfigurationData>
            <runConfigurationId>TestCloud</runConfigurationId>
         </configuration>
         <runEnabled>true</runEnabled>
         <testSuiteEntity>Test Suites/healthcare-tests - TS_RegressionTest</testSuiteEntity>
      </TestSuiteRunConfiguration>
      <TestSuiteRunConfiguration>
         <configuration>
            <groupName>Web Desktop</groupName>
            <profileName>default</profileName>
            <requireConfigurationData>false</requireConfigurationData>
            <runConfigurationId>Firefox</runConfigurationId>
         </configuration>
         <runEnabled>false</runEnabled>
         <testSuiteEntity>Test Suites/New Dynamic Test Suite</testSuiteEntity>
      </TestSuiteRunConfiguration>
      <TestSuiteRunConfiguration>
         <configuration>
            <groupName>Web Desktop</groupName>
            <profileName>default</profileName>
            <requireConfigurationData>false</requireConfigurationData>
            <runConfigurationId>Edge Chromium</runConfigurationId>
         </configuration>
         <runEnabled>true</runEnabled>
         <testSuiteEntity>Test Suites/healthcare-tests - TS_RegressionTest</testSuiteEntity>
      </TestSuiteRunConfiguration>
   </testSuiteRunConfigurations>
</TestSuiteCollectionEntity>
