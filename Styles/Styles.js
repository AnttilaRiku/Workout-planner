import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F5F5F5',
    },
    header: {
        fontSize: 28,
        color: '#4B0082',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    label: {
        marginBottom: 10,
        color: '#4B0082',
        fontSize: 16,
        fontWeight: '600',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    sportButton: {
        flex: 1,
        marginHorizontal: 5,
        borderWidth: 2,
        borderColor: '#4B0082',
        backgroundColor: '#E0E0E0', 
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent: 'center', 
        borderRadius: 2,
        flexDirection: 'row',
    },
    sportButtonText: {
        color: '#4B0082',
    },

    //Text field on user input (kilometers and distance)
    input: {
        marginBottom: 20,
        backgroundColor: '#FFFFFF',
        color: '#4B0082',
        borderColor: '#4B0082',
        borderRadius: 5,
        padding: 10,
    },

    //Why is the Select Date text grey?
    dateButton: {
        marginBottom: 20,
        color: '#FFFFFF',
        backgroundColor: '#4B0082',
        paddingVertical: 10,
        borderRadius: 5,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    calendar: {
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: '#4B0082',
        borderRadius: 5,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#4B0082',
        paddingVertical: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#4B0082',
        backgroundColor: '#E0E0E0',
        alignItems: 'center',
        borderRadius: 5,
        paddingVertical: 2,
    },

    totalDistanceText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    workoutList: {
        marginTop: 10,
    },
    workoutItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    workoutText: {
        fontSize: 16,
    },

    // Settings tab styling

    radioContainer: {
        marginVertical: 20,
        backgroundColor: '#E0E0E0',
        borderRadius: 5,
        padding: 10,
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    radioText: {
        marginLeft: 10,
        color: '#4B0082',
        fontSize: 16,
    },

});

export default Styles;
