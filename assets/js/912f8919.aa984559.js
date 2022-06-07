"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[56720],{57509:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return u}});var a=n(83117),i=n(80102),s=(n(67294),n(3905)),r=n(13904),o=["components"],d={title:"Machine learning backends",tags:["Analytics","API","plugintype"]},l=void 0,p={unversionedId:"apis/plugintypes/mlbackend/index",id:"apis/plugintypes/mlbackend/index",title:"Machine learning backends",description:"Machine learning backends process the datasets generated from the indicators and targets calculated by the Analytics API. They are used for machine learning training, prediction and models evaluation.",source:"@site/docs/apis/plugintypes/mlbackend/index.md",sourceDirName:"apis/plugintypes/mlbackend",slug:"/apis/plugintypes/mlbackend/",permalink:"/devdocs/docs/apis/plugintypes/mlbackend/",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/docs/apis/plugintypes/mlbackend/index.md",tags:[{label:"Analytics",permalink:"/devdocs/docs/tags/analytics"},{label:"API",permalink:"/devdocs/docs/tags/api"},{label:"plugintype",permalink:"/devdocs/docs/tags/plugintype"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1654608238,formattedLastUpdatedAt:"07/06/2022",frontMatter:{title:"Machine learning backends",tags:["Analytics","API","plugintype"]},sidebar:"docs",previous:{title:"Local plugins",permalink:"/devdocs/docs/apis/plugintypes/local/"},next:{title:"Activity modules",permalink:"/devdocs/docs/apis/plugintypes/mod/"}},c={},u=[{value:"Backends included in Moodle core",id:"backends-included-in-moodle-core",level:2},{value:"PHP",id:"php",level:3},{value:"Python",id:"python",level:3},{value:"File structure",id:"file-structure",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Predictor",id:"predictor",level:3},{value:"Classifier",id:"classifier",level:3},{value:"Regressor",id:"regressor",level:3}],m={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(r.Z,(0,a.Z)({frontMatter:d},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Machine learning backends process the datasets generated from the indicators and targets calculated by the ",(0,s.kt)("a",{parentName:"p",href:"/devdocs/docs/apis/subsystems/analytics/"},"Analytics API"),". They are used for machine learning training, prediction and models evaluation."),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"We strongly recommend that you read the ",(0,s.kt)("a",{parentName:"p",href:"/devdocs/docs/apis/subsystems/analytics/"},"Analytics API")," documentation to help understand the core concepts, how they are implemented in Moodle, and how machine learning backend plugins fit into the analytics API."))),(0,s.kt)("p",null,"The communication between machine learning backends and Moodle is through files because the code that will process the dataset can be written in PHP, in Python, in other languages or even use cloud services. This needs to be scalable so they are expected to be able to manage big files and train algorithms reading input files in batches if necessary."),(0,s.kt)("h2",{id:"backends-included-in-moodle-core"},"Backends included in Moodle core"),(0,s.kt)("h3",{id:"php"},"PHP"),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"PHP backend")," is the default predictions processor as it is written in PHP and does not have any external dependencies. It is using logistic regression."),(0,s.kt)("h3",{id:"python"},"Python"),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"Python backend")," requires ",(0,s.kt)("em",{parentName:"p"},"python")," binary (either python 2 or python 3) and ",(0,s.kt)("a",{parentName:"p",href:"https://pypi.python.org/pypi?name=moodlemlbackend&version=0.0.5&:action=display"},"moodlemlbackend python package")," which is maintained by Moodle HQ."),(0,s.kt)("p",null,"The Python version and libraries versions used are ",(0,s.kt)("strong",{parentName:"p"},"very important"),". We recommend using Python 3.7 for mlbackend 3.x versions."),(0,s.kt)("p",null,"The Python backend is based on ",(0,s.kt)("a",{parentName:"p",href:"https://www.tensorflow.org/"},"Google's tensorflow library")," and uses a feed-forward neural network with 1 single hidden layer."),(0,s.kt)("p",null,"The ",(0,s.kt)("em",{parentName:"p"},"moodlemlbackend")," package does store model performance information that can be visualised using ",(0,s.kt)("a",{parentName:"p",href:"https://www.tensorflow.org/get_started/summaries_and_tensorboard"},"tensorboard"),". Information generated during models evaluation is available through the models management page, under each model ",(0,s.kt)("em",{parentName:"p"},"Actions > Log")," menu."),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"We recommend use of the ",(0,s.kt)("strong",{parentName:"p"},"Python")," backend as it is able to predict more accurately than the PHP backend and it is faster."))),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"You can ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/moodlehq/moodle-mlbackend-python"},"view the source")," of the ",(0,s.kt)("em",{parentName:"p"},"moodlemlbackend")," library that Moodle uses."))),(0,s.kt)("h2",{id:"file-structure"},"File structure"),(0,s.kt)("p",null,"Machine learning backends are located in the ",(0,s.kt)("inlineCode",{parentName:"p"},"lib/mlbackend")," directory."),(0,s.kt)("p",null,"Each plugin is in a separate subdirectory and consists of a number of ",(0,s.kt)("em",{parentName:"p"},"mandatory files")," and any other files the developer is going to use."),(0,s.kt)("details",null,(0,s.kt)("summary",null,"View an example directory layout for the `mlbackend_python` plugin."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"lib/mlbackend/python\n\u251c\u2500\u2500 classes\n\u2502\xa0\xa0 \u251c\u2500\u2500 privacy\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 provider.php\n\u2502\xa0\xa0 \u2514\u2500\u2500 processor.php\n\u251c\u2500\u2500 lang\n\u2502\xa0\xa0 \u2514\u2500\u2500 en\n\u2502\xa0\xa0     \u2514\u2500\u2500 mlbackend_python.php\n\u251c\u2500\u2500 phpunit.xml\n\u251c\u2500\u2500 settings.php\n\u251c\u2500\u2500 tests\n\u2502\xa0\xa0 \u2514\u2500\u2500 processor_test.php\n\u251c\u2500\u2500 upgrade.txt\n\u2514\u2500\u2500 version.php\n"))),(0,s.kt)("p",null,"Some of the important files for the mlbackend plugintype are described below. See the ",(0,s.kt)("a",{parentName:"p",href:"../commonfiles"},"common plugin files")," documentation for details of other files which may be useful in your plugin."),(0,s.kt)("h2",{id:"interfaces"},"Interfaces"),(0,s.kt)("p",null,"A summary of these interfaces purpose:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Evaluate a provided prediction model"),(0,s.kt)("li",{parentName:"ul"},"Train machine learning algorithms with the existing site data"),(0,s.kt)("li",{parentName:"ul"},"Predict targets based on previously trained algorithms")),(0,s.kt)("h3",{id:"predictor"},"Predictor"),(0,s.kt)("p",null,"This is the basic interface to be implemented by machine learning backends. Two main types are, ",(0,s.kt)("em",{parentName:"p"},"classifiers")," and ",(0,s.kt)("em",{parentName:"p"},"regressors"),". We provide the ",(0,s.kt)("em",{parentName:"p"},"Regressor")," interface but it is not currently implemented by core Machine learning backends. Both of these are supervised algorithms. Each type includes methods to train, predict and evaluate datasets."),(0,s.kt)("p",null,"You can use ",(0,s.kt)("strong",{parentName:"p"},"is_ready")," to check that the backend is available."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * Is it ready to predict?\n *\n * @return bool\n */\npublic function is_ready();\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"clear_model")," and ",(0,s.kt)("strong",{parentName:"p"},"delete_output_dir")," purpose is to clean up stuff created by the machine learning backend."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * Delete all stored information of the current model id.\n *\n * This method is called when there are important changes to a model,\n * all previous training algorithms using that version of the model\n * should be deleted.\n *\n * @param string $uniqueid The site model unique id string\n * @param string $modelversionoutputdir The output dir of this model version\n * @return null\n */\npublic function clear_model($uniqueid, $modelversionoutputdir);\n\n/**\n * Delete the output directory.\n *\n * This method is called when a model is completely deleted.\n *\n * @param string $modeloutputdir The model directory id (parent of all model versions subdirectories).\n * @param string $uniqueid The site model unique id string\n * @return null\n */\npublic function delete_output_dir($modeloutputdir, $uniqueid);\n")),(0,s.kt)("h3",{id:"classifier"},"Classifier"),(0,s.kt)("p",null,"A ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Statistical_classification"},"classifier"),' sorts input into two or more categories, based on analysis of the indicators. This is frequently used in binary predictions, e.g. course completion vs. dropout. This machine learning algorithm is "supervised": It requires a training data set of elements whose classification is known (e.g. courses in the past with a clear definition of whether the student has dropped out or not). This is an interface to be implemented by machine learning backends that support classification. It extends the ',(0,s.kt)("em",{parentName:"p"},"Predictor")," interface."),(0,s.kt)("p",null,"Both these methods and ",(0,s.kt)("em",{parentName:"p"},"Predictor")," methods should be implemented."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * Train this processor classification model using the provided supervised learning dataset.\n *\n * @param string $uniqueid\n * @param \\stored_file $dataset\n * @param string $outputdir\n * @return \\stdClass\n */\npublic function train_classification($uniqueid, \\stored_file $dataset, $outputdir);\n\n/**\n * Classifies the provided dataset samples.\n *\n * @param string $uniqueid\n * @param \\stored_file $dataset\n * @param string $outputdir\n * @return \\stdClass\n */\npublic function classify($uniqueid, \\stored_file $dataset, $outputdir);\n\n/**\n * Evaluates this processor classification model using the provided supervised learning dataset.\n *\n * @param string $uniqueid\n * @param float $maxdeviation\n * @param int $niterations\n * @param \\stored_file $dataset\n * @param string $outputdir\n * @param  string $trainedmodeldir\n * @return \\stdClass\n */\npublic function evaluate_classification($uniqueid, $maxdeviation, $niterations, \\stored_file $dataset, $outputdir);\n")),(0,s.kt)("h3",{id:"regressor"},"Regressor"),(0,s.kt)("p",null,"A ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Regression_analysis"},"regressor"),' predicts the value of an outcome (or dependent) variable based on analysis of the indicators. This value is linear, such as a final grade in a course or the likelihood a student is to pass a course. This machine learning algorithm is "supervised": It requires a training data set of elements whose classification is known (e.g. courses in the past with a clear definition of whether the student has dropped out or not). This is an interface to be implemented by machine learning backends that support regression. It extends ',(0,s.kt)("em",{parentName:"p"},"Predictor")," interface."),(0,s.kt)("p",null,"Both these methods and ",(0,s.kt)("em",{parentName:"p"},"Predictor")," methods should be implemented."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * Train this processor regression model using the provided supervised learning dataset.\n *\n * @param string $uniqueid\n * @param \\stored_file $dataset\n * @param string $outputdir\n * @return \\stdClass\n */\npublic function train_regression($uniqueid, \\stored_file $dataset, $outputdir);\n\n/**\n * Estimates linear values for the provided dataset samples.\n *\n * @param string $uniqueid\n * @param \\stored_file $dataset\n * @param mixed $outputdir\n * @return void\n */\npublic function estimate($uniqueid, \\stored_file $dataset, $outputdir);\n\n\n/**\n * Evaluates this processor regression model using the provided supervised learning dataset.\n *\n * @param string $uniqueid\n * @param float $maxdeviation\n * @param int $niterations\n * @param \\stored_file $dataset\n * @param string $outputdir\n * @param  string $trainedmodeldir\n * @return \\stdClass\n */\npublic function evaluate_regression($uniqueid, $maxdeviation, $niterations, \\stored_file $dataset, $outputdir);\n")))}h.isMDXComponent=!0}}]);