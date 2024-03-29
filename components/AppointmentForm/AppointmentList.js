import { useContext, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import Navigation from "../../components/Layout/Navigation";
import { GeneralContext } from "../../contexts/GeneralContext";

const AppointmentList = () => {
  const { appointmentCtx } = useContext(GeneralContext);
  const { appointments, getAllAppointmentsHandler, deleteAppointmentHandler } =
    appointmentCtx;

  useEffect(() => {
    getAllAppointmentsHandler();
  }, []);

  return (
    <section className="grid grid-cols-12 grid-rows-mobileAuto sm:grid-rows-[repeat(10,_minmax(10vh,_10vh))] font-inter h-full w-full">
      <Navigation />
      <div className="col-start-3 col-end-12 row-start-2 row-end-9 flex flex-col mt-10">
        <h2 className="text-5xl text-center font-semibold tracking-wider text-primary-text mb-10">
          Appointments List
        </h2>
        <div className="overflow-x-auto">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-x-scroll sm:overflow-hidden border rounded-md">
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead className="bg-[#166060]">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                    >
                      Service
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-center text-white uppercase "
                    >
                      remove
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {appointments?.map((appointment) => {
                    return (
                      <tr key={appointment.id}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {appointment.id}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {appointment.service}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {appointment.date}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {appointment.description}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          <AiFillDelete
                            className="mx-auto cursor-pointer text-dark-green sm:text-[1.2rem] hover:scale-[1.1] drop-shadow-lg shadow-black "
                            onClick={() =>
                              deleteAppointmentHandler(
                                appointment.id,
                                appointment.service
                              )
                            }
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentList;
