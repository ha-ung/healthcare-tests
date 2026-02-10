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
  &quot;id&quot;: &quot;any_ios_phone&quot;,
  &quot;isTablet&quot;: false,
  &quot;mobileDeviceId&quot;: &quot;any_ios_phone_18&quot;,
  &quot;name&quot;: &quot;Any iPhone&quot;,
  &quot;displayName&quot;: &quot;Any iPhone&quot;,
  &quot;osVersion&quot;: &quot;18&quot;,
  &quot;os&quot;: &quot;iOS&quot;,
  &quot;platformName&quot;: &quot;IOS&quot;,
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
                  <value>{&quot;id&quot;:&quot;bcbc6e5c-d268-4d96-bbfd-e0c745e0ca2b&quot;,&quot;organizationId&quot;:&quot;38949&quot;,&quot;name&quot;:&quot;SwagLabsMobileApp&quot;,&quot;platform&quot;:&quot;IOS&quot;,&quot;status&quot;:&quot;READY&quot;,&quot;size&quot;:10362716,&quot;storagePath&quot;:&quot;b1f9ffcf-c4f0-4cff-b370-e9129314ef6b&quot;,&quot;uploadedDate&quot;:&quot;2025-09-26T06:38:17.512731&quot;,&quot;createdDate&quot;:&quot;2025-09-26T06:38:17.512731&quot;,&quot;updatedDate&quot;:&quot;2025-09-26T06:38:19.815355&quot;,&quot;fileName&quot;:&quot;iOS.RealDevice.SauceLabs.Mobile.Sample.app.2.7.1.ipa&quot;,&quot;metadata&quot;:{&quot;identifier&quot;:&quot;com.saucelabs.SwagLabsMobileApp&quot;,&quot;name&quot;:&quot;SwagLabsMobileApp&quot;,&quot;version&quot;:&quot;2.7.1&quot;}}</value>
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
