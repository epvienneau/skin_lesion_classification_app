# skin_lesion_classification_app

This service is currently deployed at this address: vcm-1845.vm.duke.edu

The goal of this project is to make melanoma screening more accessible to patients by providing a public and free skin lesion classification smartphone app. Users will be able to create a user account and upload photos of their skin. Users will have the option of adding additional information such as age, sex, and family history. The images will be fed into a deep learning model trained on this dataset: https://isic-archive.com/#images . The model will determine if the lesion is benign or malignant and notify the user. In the future, additional health information from the user may be incorporated into the model to assist in making predictions. The images, health data, and predictions will be stored in an encrypted database using Google Cloud Platforms. Future development goals include giving the user the ability to update his/her profile with official diagnoses of each skin lesion examined through this service. This data would then be used to generate model statistics and could be used to update the deep learning model itself. Another feature for future development would be giving the user the ability to upload multiple photos of the same lesion over time and link current photos to previous ones. This change over time information could be used to further inform the model and increase prediction accuracy.

RFC Comment-only link: https://docs.google.com/document/d/1YPVr7B2xX29EV3QD4q2QVrX84_vOlj1u1hufQdR3Ynk/edit?usp=sharing

Final Write up Comment-only link: https://docs.google.com/document/d/1UE3clAn0-0bLuTypAbeG4H2oUAT5qC4GAl8SSEACAXU/edit?usp=sharing
