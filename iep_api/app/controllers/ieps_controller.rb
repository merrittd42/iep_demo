class IepsController < ApplicationController

    def create
        puts params

        pdf = FillablePDF.new('public/blank_iep_short_2.pdf')

        puts pdf.names

        date = Date.today

        pdf.set_field("Student", "Dustin Merritt")
        pdf.set_field("School", "Rice Elementary")
        pdf.set_field("Date of Birth", date - 10.years)
        pdf.set_field("Effective Dates", date)
        pdf.set_field("File Date", date)
        pdf.set_field("Date of Report", date)
        pdf.set_field("Current Grade", "10")
        pdf.set_field("Gender", "M")
        pdf.set_field("Date", date)
        pdf.set_field("Conference Date", date)
        pdf.set_field("Age", "10")
        pdf.set_field("Time", "10 PM")
        pdf.set_field("Place", "Education Building 6")
        pdf.set_field("strength_1", "Good at reading quickly")
        pdf.set_field("strength_2", "Loves history")
        pdf.set_field("strength_3", "Patient")
        pdf.set_field("strength_4", "Large desire to write")
        pdf.set_field("strength_5", "Persistent")
        pdf.set_field("Anticipated date of Graduation", date + 7.years)
        pdf.set_field("Accommodations", "Extra time on tests")
        pdf.set_field("Accommodations_2", "Extra time on tests")
        pdf.set_field("Accommodations_3", "After class independent help with teacher")
        pdf.set_field("Accommodations_4", "Extra time on tests")
        pdf.set_field("Guardian Information.0.0", "Father")
        pdf.set_field("Guardian Information.1.0", "James Merritt")
        pdf.set_field("Guardian Information.2.0", "440-123-1234")
        pdf.set_field("Guardian Information.3.0", "440-123-1234")
        pdf.set_field("Guardian Information.4.0", "440-123-1234")
        pdf.set_field("Guardian Information.5.0", "12 Sycamore Court")
        pdf.set_field("Guardian Information.0.1", "Mother")
        pdf.set_field("Guardian Information.1.1", "Elizabeth Merritt")
        pdf.set_field("Guardian Information.2.1", "440-123-1235")
        pdf.set_field("Guardian Information.3.1", "440-123-1235")
        pdf.set_field("Guardian Information.4.1", "440-123-1235")
        pdf.set_field("Guardian Information.5.1", "12 Sycamore Court")
        pdf.set_field("Diploma", "✔")
        pdf.set_field("Purposes of Conference", "Establish initial goals, meet parents")
        pdf.set_field("progress_1", "Monitoring of grades")
        pdf.set_field("progress_2", "Weekly check in")
        pdf.set_field("progress_3", "Monitoring of grades")
        pdf.set_field("progress_4", "Monitoring of grades")
        pdf.set_field("progress_5", "Interview with teacher")
        pdf.set_field("goal_1", params[:goal1])
        pdf.set_field("goal_2", params[:goal2])
        pdf.set_field("goal_3", params[:goal3])
        pdf.set_field("goal_4", params[:goal4])
        pdf.set_field("goal_5", params[:goal5])
        pdf.set_field("goal_statement_1", params[:statement1])
        pdf.set_field("goal_statement_2", params[:statement2])
        pdf.set_field("goal_statement_3", params[:statement3])
        pdf.set_field("goal_statement_4", params[:statement4])
        pdf.set_field("goal_statement_5", params[:statement5])
        pdf.set_field("current_1", "Average GPA of 2.5")
        pdf.set_field("current_2", "Has trouble interacting with peers")
        pdf.set_field("current_3", "Distracted occasionally")
        pdf.set_field("current_4", "Disrupts class occasionally")
        pdf.set_field("current_5", "Needs help with math consistently ")

        pdf.save_as('neat.pdf')

        pdf.close

        content = File.binread('neat.pdf')


        puts params
        puts content

        send_data Base64.encode64(content), type: 'application/pdf', disposition: 'inline' 
        
    end

end