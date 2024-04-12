import joblib 
impo

loaded_model = joblib.load('svm_model.pkl')

# Function to predict the answer based on user input using the loaded model
def predict_answer(user_question):
    predicted_answer = loaded_model.predict([user_question])
    return predicted_answer[0]
