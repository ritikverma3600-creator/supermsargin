import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
function ManageTeamContent() {
  const [members, setMembers] = useState([
    { id: 1, name: "Shiv Kumar", contact: "+91-9234567891", email: "Testemail@email.com", role: "Manager" },
    { id: 2, name: "Shiv Kumar", contact: "+91-9234567891", email: "Testemail@email.com", role: "Manager" },
  ]);

  const deleteMember = (id) => setMembers((prev) => prev.filter((m) => m.id !== id));

  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-bold text-[#1a1456] text-[24px]">Add & Manage Team Member</h2>

      {/* ADD NEW */}
      <div className="border border-gray-200 rounded-lg p-5 flex items-center gap-3 cursor-pointer hover:bg-gray-50">
        <span className="text-[#1a1456] text-[24px] font-light">+</span>
        <span className="text-[#1a1456] font-medium text-[17px]">Add New Member</span>
      </div>

      {/* CURRENT MEMBERS */}
      <div>
        <h3 className="font-bold text-[#1a1456] text-[17px] mb-4">Currents Team Member</h3>
        <table className="w-full text-[12px]">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left px-4 py-3 text-gray-600 font-medium">
                <div className="flex items-center gap-1">Name <span className="text-gray-400 text-xs">⇅</span></div>
              </th>
              <th className="text-left px-4 py-3 text-gray-600 font-medium">
                <div className="flex items-center gap-1">Contact <span className="text-gray-400 text-xs">⇅</span></div>
              </th>
              <th className="text-left px-4 py-3 text-gray-600 font-medium">
                <div className="flex items-center gap-1">Email <span className="text-gray-400 text-xs">⇅</span></div>
              </th>
              <th className="text-left px-4 py-3 text-gray-600 font-medium">
                <div className="flex items-center gap-1">Role <span className="text-gray-400 text-xs">⇅</span></div>
              </th>
              <th className="text-left px-4 py-3 text-gray-600 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-4 text-gray-700">{member.name}</td>
                <td className="px-4 py-4 text-gray-600">{member.contact}</td>
                <td className="px-4 py-4 text-gray-600">{member.email}</td>
                <td className="px-4 py-4 text-gray-600">{member.role}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <button className="text-blue-500 hover:text-blue-700"><FaEdit /></button>
                    <button onClick={() => deleteMember(member.id)} className="text-red-500 hover:text-red-700"><FaTrash /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
export default ManageTeamContent;